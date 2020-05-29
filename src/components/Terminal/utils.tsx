import { Dispatch, ReactNode, SetStateAction } from 'react';
import { IFsNode } from './fs';

export interface IRunProps {
    write: (c: ReactNode) => void;
    line: string;
    fs: IFsNode;
    cwd: string[];
    setCwd: Dispatch<SetStateAction<string[]>>;
    clear: () => void;
}

export interface ICommand {
    name: string;
    run: (cmdName: string, cmdArgs: string, props: IRunProps) => void;
}

export function runCommand(commands: ICommand[], props: IRunProps) {
    const [cmdName, ...cmdArgsParts] = props.line.trim().split(' ');
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

export function t(txt: string) {
    return txt.substr(1);
}
