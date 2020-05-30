import { Dispatch, ReactNode, SetStateAction } from 'react';
import { IFsNode } from './fs';

interface RunCommandProps {
    write: (c: ReactNode) => void;
    line: string;
    fs: IFsNode;
    cwd: string[];
    setCwd: Dispatch<SetStateAction<string[]>>;
    clear: () => void;
}

export interface RunProps extends RunCommandProps {
    cmdName: string;
    args: string[];
}

export interface Arg {
    name: string;
    default?: string;
    mandatory?: boolean;
}

export interface ICommand {
    name: string;
    short: string;
    args: Arg[];
    anyArgs?: boolean;
    run: (props: RunProps) => void;
}

export function usage(cmd: ICommand) {
    let argsStr;

    if (cmd.anyArgs) {
        argsStr = '[ ... ]';
    } else {
        argsStr = cmd.args
            .map((a) => {
                if (a.mandatory) {
                    return `<${a.name}>`;
                }

                return `[${a.name}]`;
            })
            .join(' ');
    }

    return `${cmd.name} ${argsStr}`;
}

export function parseArgs(s: string) {
    const args: string[] = [];
    let acc = '';

    function pushArg() {
        args.push(acc);
        acc = '';
    }

    let inStr = false;
    let i = 0;
    while (i < s.length) {
        const c = s[i];
        switch (c) {
            case '"':
                if (inStr) {
                    inStr = false;
                    pushArg();
                } else {
                    inStr = true;
                }
                break;
            case ' ':
                if (inStr) {
                    acc += c;
                } else {
                    pushArg();
                }
                break;
            default:
                acc += c;
                break;
        }
        i++;
    }

    if (acc.length > 0) {
        pushArg();
    }

    return args;
}

export function processArgs(inArgs: string[], cmd: ICommand): { args: string[]; error?: string } {
    if (cmd.anyArgs) {
        return { args: inArgs };
    }

    const args: string[] = [];

    let hadOptional = false;

    if (inArgs.length > cmd.args.length) {
        return { args, error: `expected ${cmd.args.length}, got ${inArgs.length}` };
    }

    for (let i = 0; i < cmd.args.length; i++) {
        const arg = cmd.args[i];
        const actualArg = inArgs[i];

        if (actualArg === undefined) {
            if (!arg.mandatory) {
                hadOptional = true;
            }

            if (arg.mandatory) {
                if (hadOptional) {
                    console.error('Mandatory arg after optional');
                }

                return { args, error: `mandatory parameter ${arg.name} missing` };
            } else if (arg.default !== undefined) {
                args.push(arg.default);
            } else {
                args.push('');
            }
        } else {
            args.push(actualArg);
        }
    }

    return { args };
}

export function runCommand(commands: ICommand[], props: RunCommandProps) {
    const [cmdName, ...cmdArgsParts] = props.line.trim().split(' ');

    if (!cmdName) {
        return;
    }

    const rawArgs = parseArgs(cmdArgsParts.join(' '));

    for (const cmd of commands) {
        if (cmdName === cmd.name) {
            const { args, error } = processArgs(rawArgs, cmd);

            if (error) {
                props.write(`Error: ${error}`);
                props.write(usage(cmd));
                return;
            }

            cmd.run({
                ...props,
                cmdName,
                args,
            });
            return;
        }
    }

    props.write(`${cmdName}: command not found`);
}

export function t(txt: string) {
    return txt.substr(1); // Remove the first new line
}
