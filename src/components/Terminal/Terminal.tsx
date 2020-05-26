import * as React from 'react';
import {ReactNode, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react';
import useEventListener from '../../hooks/useEventListener';
import {IFsNode} from './fs';
import styles from './Terminal.scss';
import {ICommand, runCommand} from './utils';

function Line({prompt, content}: {prompt: boolean, content: ReactNode}) {
    return (
        <div className={styles.line}>
            {prompt && '$'} {content}
        </div>
    );
}

function Caret() {
    return <div className={styles.caret}>&nbsp;</div>;
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
    const [i, setI] = useState<number|null>(null);
    const maxI = history.length - 1;

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
        if (i === null) {
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

export default function Terminal({cmds: userCmds, fs, initCwd = [], motd = null, initCmds = []}: ITerminal) {
    const [lines, setLines] = useState<ILine[]>([]);
    const [currentLine, setCurrentLine] = useState('');
    const [cwd, setCwd] = useState<string[]>(initCwd);
    const [running, setRunning] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [addHistory, historyElement, prevHistory, nextHistory] = useHistory();

    const writeLine = useCallback((input: boolean, content: ReactNode) =>
        setLines((l) => [...l, {input, content}]), [setLines]);
    const writeNonPrompt = useCallback((c: ReactNode) => writeLine(false, c), [writeLine]);

    const cmds = useMemo(() => {
        return [
            ...userCmds,
            {
                name: 'help',
                run: () => {
                    for (const cmd of cmds) {
                        writeNonPrompt(cmd.name);
                    }
                },
            },
        ];
    }, [userCmds]);

    const runCmdWithContext = (l: string) => runCommand(cmds, {
        clear: () => setLines([]),
        cwd,
        fs,
        line: l,
        setCwd,
        write: writeNonPrompt,
    });

    const keydownCb = useCallback(
        (event: KeyboardEvent) => {
            if (event.metaKey) {
                return;
            }

            switch (event.key) {
                case 'Shift':
                case 'Alt':
                case 'Control':
                case 'ArrowLeft':
                case 'ArrowRight':
                    event.preventDefault();
                    break;
                case 'ArrowUp':
                    prevHistory();
                    break;
                case 'ArrowDown':
                    nextHistory();
                    break;
                case 'Tab':
                    const [name, ...rest] = currentLine.split(' ');

                    if (!currentLine.includes(' ')) {
                        const candidates = findCmds(cmds, name);

                        if (candidates.length === 1) {
                            setCurrentLine(`${candidates[0].name} `);
                        }
                    }

                    event.preventDefault();
                    break;
                case 'Enter':
                    writeLine(true, currentLine);
                    addHistory(currentLine);
                    setRunning(true);
                    runCmdWithContext(currentLine);
                    setRunning(false);
                    setCurrentLine('');
                    event.preventDefault();
                    break;
            }
    }, [cmds, writeLine, currentLine, setCurrentLine]);
    useEventListener('keydown', keydownCb);

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

    const scrollBottom = useCallback(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({behavior: 'smooth', block: 'end'});
        }
    }, [bottomRef]);

    useEffect(scrollBottom, [lines, running, currentLine]);

    const focusInput = useCallback(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef]);

    const onInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentLine(e.target.value);
        scrollBottom();
    }, [setCurrentLine, scrollBottom]);

    return (
        <div className={styles.terminal} onClick={focusInput}>
            {lines.map((c, i) => <Line key={i} prompt={c.input} content={c.content} />)}
            {!running && <Line prompt={true} content={<>{currentLine}<Caret /></>} />}
            <input type='url'
                   className={styles.hiddenInput}
                   ref={inputRef}
                   value={currentLine}
                   autoCapitalize={'off'}
                   autoComplete={'off'}
                   autoCorrect={'off'}
                   spellCheck={false}
                   autoFocus={true}
                   onChange={onInputChange} />
            <div ref={bottomRef} />
        </div>
    );
}
