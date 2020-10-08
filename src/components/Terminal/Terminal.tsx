import * as React from 'react';
import { MouseEvent, ReactNode, SyntheticEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import useEventListener from '../../hooks/useEventListener';
import { IFsNode } from './fs';
import { ICommand, runCommand, usage } from './utils';
import { Context } from './useScrollBottom';

const LineDiv = styled.div`
    display: block;
    word-break: break-all;
    white-space: pre-wrap;
`;

function Line({ prompt, content }: { prompt: boolean; content: ReactNode }) {
    return (
        <LineDiv>
            {prompt && '$ '}
            {content}
        </LineDiv>
    );
}

const CaretDiv = styled.div`
    display: inline-block;
    background: white;
    color: black;
`;

function Caret({ symbol = <>&nbsp;</> }: { symbol?: ReactNode }) {
    return <CaretDiv>{symbol}</CaretDiv>;
}

function CurrentLine({ line, pos }: { line: string; pos: number }) {
    const content = line.split('').map((l, i) => {
        if (i === pos) {
            return <Caret key={'caret'} symbol={l} />;
        } else {
            return l;
        }
    });

    if (pos < 0 || pos > line.length - 1) {
        content.push(<Caret key={'caret'} />);
    }

    return <Line prompt={true} content={content} />;
}

interface ITerminal {
    cmds: ICommand[];
    initCmds?: string[];
    motd?: ReactNode;
    fs: IFsNode;
    initCwd?: string[];
}

interface ILine {
    input: boolean;
    content: ReactNode;
}

function findCmds(cmds: ICommand[], str: string) {
    const candidates: ICommand[] = [];
    for (const cmd of cmds) {
        if (cmd.name.startsWith(str)) {
            candidates.push(cmd);
        }
    }

    return candidates;
}

function useHistory() {
    const [history, setHistory] = useState<string[]>([]);
    const [i, setI] = useState<number | null>(null);
    const maxI = history.length > 0 ? history.length - 1 : null;

    function add(e: string) {
        setHistory((h) => [...h, e]);
    }

    function cancelI() {
        setI(null);
    }

    function prev() {
        if (i === null) {
            setI(maxI);
            return;
        }

        if (i > 0) {
            setI(i - 1);
        }
    }

    function next() {
        if (i === null || maxI === null) {
            return;
        }

        if (i < maxI) {
            setI(i + 1);
        } else {
            cancelI();
        }
    }

    const elem = i != null ? history[i] : null;

    return [add, elem, prev, next, cancelI] as const;
}

const HiddenInput = styled.input`
    width: 1px;
    height: 1px;
    position: fixed;
    z-index: -999;
    padding: 0;
    margin: 0;
    border: 0;
`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
    color: white;
    font-family: Courier, monospace;
    overflow-x: hidden;
    overflow-y: scroll;
`;

export default function Terminal({ cmds: userCmds, fs, initCwd = [], motd = null, initCmds = [] }: ITerminal) {
    const [lines, setLines] = useState<ILine[]>([]);
    const [currentLine, setCurrentLine] = useState('');
    const [cwd, setCwd] = useState<string[]>(initCwd);
    const [running, setRunning] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [addHistory, historyElement, prevHistory, nextHistory] = useHistory();
    const [caretPos, setCaretPos] = useState(-1);

    const writeLine = useCallback((input: boolean, content: ReactNode) => setLines((l) => [...l, { input, content }]), [
        setLines,
    ]);
    const writeNonPrompt = useCallback((c: ReactNode) => writeLine(false, c), [writeLine]);

    function gateCapture(e: SyntheticEvent | UIEvent) {
        const t = e.target as HTMLElement;
        const tagName = t.tagName;

        if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
            if (t !== inputRef.current) {
                e.stopPropagation();
                return true;
            }
        }

        return false;
    }

    const cmds = useMemo<ICommand[]>(() => {
        return [
            ...userCmds,
            {
                name: 'help',
                short: 'Seek help',
                args: [],
                run: ({ write }) => {
                    const m = Math.max(...cmds.map((c) => c.name.length));

                    for (const cmd of cmds) {
                        write(`${cmd.name}${' '.repeat(m - cmd.name.length)}: ${cmd.short}`);
                    }
                },
            },
            {
                name: 'man',
                short: 'Prints command usage',
                args: [{ name: 'cmd', mandatory: true }],
                run: ({ write, args }) => {
                    const cmdName = args[0];

                    for (const cmd of cmds) {
                        if (cmd.name === cmdName) {
                            write(`${cmd.name}: ${cmd.short}`);
                            write(` `);
                            write(`Usage:`);
                            write(`    $ ${usage(cmd)}`);
                            return;
                        }
                    }

                    write(`command '${cmdName}' not found`);
                },
            },
        ];
    }, [userCmds]);

    const runCmdWithContext = (line: string) =>
        runCommand(
            cmds,
            {
                clear: () => setLines([]),
                cwd,
                fs,
                setCwd,
                write: writeNonPrompt,
            },
            line,
        );

    const keydownCb = useCallback(
        (event: KeyboardEvent) => {
            if (gateCapture(event)) {
                return;
            }

            if (event.metaKey) {
                return;
            }

            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault();
                    prevHistory();
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    nextHistory();
                    break;
                case 'Tab':
                    event.preventDefault();

                    const [name /*, ...rest*/] = currentLine.split(' ');

                    if (!currentLine.includes(' ')) {
                        const candidates = findCmds(cmds, name);

                        if (candidates.length === 1) {
                            setCurrentLine(`${candidates[0].name} `);
                        }
                    }

                    break;
                case 'Enter':
                    event.preventDefault();
                    writeLine(true, currentLine);
                    addHistory(currentLine);
                    setRunning(true);
                    runCmdWithContext(currentLine);
                    setRunning(false);
                    setCurrentLine('');
                    break;
            }
        },
        [cmds, writeLine, currentLine, setCurrentLine],
    );
    useEventListener('keydown', keydownCb);

    const syncCaret = useCallback(() => {
        if (inputRef.current) {
            const ss = inputRef.current.selectionStart;
            setCaretPos(ss !== null ? ss : -1);
        }
    }, [cmds, writeLine, currentLine, setCurrentLine]);
    useEventListener('keyup', syncCaret);
    useEventListener('keydown', syncCaret);

    useEffect(() => {
        if (motd) {
            writeNonPrompt(motd);
        }

        for (const l of initCmds) {
            runCmdWithContext(l);
        }
    }, []);

    useEffect(() => {
        setCurrentLine(historyElement || '');
    }, [historyElement]);

    useEffect(() => {
        syncCaret();
    }, [currentLine]);

    const scrollBottom = useCallback(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [bottomRef]);

    useEffect(scrollBottom, [lines, running, currentLine]);

    const focusInput = useCallback(
        (e: MouseEvent) => {
            if (gateCapture(e)) {
                return;
            }

            if (inputRef.current) {
                inputRef.current.focus();
            }
        },
        [inputRef],
    );

    const onInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setCurrentLine(e.target.value);
            syncCaret();
            scrollBottom();
        },
        [setCurrentLine, scrollBottom],
    );

    return (
        <Context.Provider value={scrollBottom}>
            <Container onClick={focusInput}>
                {lines.map((c, i) => (
                    <Line key={i} prompt={c.input} content={c.content} />
                ))}
                {!running && <CurrentLine line={currentLine} pos={caretPos} />}
                <HiddenInput
                    type="text"
                    ref={inputRef}
                    value={currentLine}
                    autoCapitalize={'none'}
                    autoComplete={'off'}
                    autoCorrect={'off'}
                    spellCheck={false}
                    autoFocus={true}
                    onChange={onInputChange}
                />
                <div ref={bottomRef} />
            </Container>
        </Context.Provider>
    );
}
