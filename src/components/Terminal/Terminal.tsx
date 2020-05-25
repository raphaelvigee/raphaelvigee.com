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

export default function Terminal({cmds: userCmds, fs, initCwd = [], motd = null, initCmds = []}: ITerminal) {
    const [lines, setLines] = useState<ILine[]>([]);
    const [currentLine, setCurrentLine] = useState('');
    const [cwd, setCwd] = useState<string[]>(initCwd);
    const ref = useRef<HTMLDivElement>(null);

    const writeLine = useCallback((input: boolean, c: ReactNode) =>
        setLines((l) => [...l, {input, content: c}]), [setLines]);
    const writeNonPrompt = (c: ReactNode) => writeLine(false, c);

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

    const cb = useCallback(
        (event: KeyboardEvent) => {
            if (event.metaKey) {
                return;
            }

            event.preventDefault();

            switch (event.key) {
                case 'Shift':
                case 'Alt':
                case 'Control':
                case 'ArrowLeft':
                case 'ArrowRight':
                case 'ArrowUp':
                case 'ArrowDown':
                    break;
                case 'Tab':
                    const [name, ...rest] = currentLine.split(' ');
                    console.log('name', name, typeof name);
                    console.log('rest', rest);

                    if (!currentLine.includes(' ')) {
                        const candidates = findCmds(cmds, name);
                        console.log('candidates', candidates);

                        if (candidates.length === 1) {
                            setCurrentLine(`${candidates[0].name} `);
                        }

                        break;
                    }

                    break;
                case 'Enter':
                    writeLine(true, currentLine);
                    runCmdWithContext(currentLine);
                    setCurrentLine('');
                    break;
                case 'Backspace':
                    setCurrentLine(currentLine.slice(0, -1));
                    break;
                default:
                    setCurrentLine((c) => `${c}${event.key}`);
                    break;
            }
    }, [cmds, writeLine, currentLine, setCurrentLine]);

    useEffect(() => {
        if (motd) {
            writeNonPrompt(motd);
        }

        for (const l of initCmds) {
            runCmdWithContext(l);
        }
    }, []);

    useEventListener('keydown', cb);
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [lines]);

    return (
        <div className={styles.terminal}>
            {lines.map((c, i) => <Line key={i} prompt={c.input} content={c.content} />)}
            <Line prompt={true} content={<>{currentLine}<Caret /></>} />
            <div ref={ref} />
        </div>
    );
}
