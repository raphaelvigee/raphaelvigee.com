import {ReactNode, useCallback, useEffect, useState} from 'react';
import * as React from 'react';
import useEventListener from '../../hooks/useEventListener';
import styles from './Terminal.scss';

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

export interface IRunProps {
    write: (c: ReactNode) => void;
    line: string;
}

export interface ICommand {
    name: string;
    run: (cmdName: string, cmdArgs: string, props: IRunProps) => void;
}

interface ITerminal {
    cmds: ICommand[];
    initCmds?: string[];
    motd?: ReactNode;
}

interface ILine {
    input: boolean;
    content: ReactNode;
}

function runCommand(commands: ICommand[], props: IRunProps) {
    const [cmdName, ...cmdArgsParts] = props.line.split(' ');
    const cmdArgs = cmdArgsParts.join(' ');

    if (!cmdName) {
        return;
    }

    for (const cmd of commands) {
        if (cmdName === cmd.name) {
            cmd.run(cmdName, cmdArgs, props);
            return;
        }
    }

    props.write(`${cmdName}: command not found`);
}

export default function Terminal({cmds, motd = null, initCmds = []}: ITerminal) {
    const [lines, setLines] = useState<ILine[]>([]);
    const [currentLine, setCurrentLine] = useState('');

    const writeLine = useCallback((input: boolean, c: ReactNode) =>
        setLines((l) => [...l, {input, content: c}]), [setLines]);
    const writeNonPrompt = (c: ReactNode) => writeLine(false, c);

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
                case 'Enter':
                    writeLine(true, currentLine);
                    runCommand(cmds, {
                        line: currentLine,
                        write: writeNonPrompt,
                    });
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
            runCommand(cmds, {
                line: l,
                write: writeNonPrompt,
            });
        }
    }, []);

    useEventListener('keydown', cb);

    return (
        <div className={styles.terminal}>
            {lines.map((c, i) => <Line key={i} prompt={c.input} content={c.content} />)}
            <Line prompt={true} content={<>{currentLine}<Caret /></>} />
        </div>
    );
}
