import { getFs, IFsNode, isFile, isFolder, parsePath, pathToString } from './fs';
import { ICommand } from './utils';

export const cmdEcho: ICommand = {
    name: 'echo',
    run(_, args, { write }) {
        write(args);
    },
};

export const cmdCd: ICommand = {
    name: 'cd',
    run(_, args, { cwd, setCwd, write, fs }) {
        nodeHelper(write, fs, cwd, args, (node, absPath) => {
            if (isFolder(node)) {
                setCwd(absPath);
                return;
            }

            write(`${pathToString(absPath)}: not a directory`);
        });
    },
};

function nodeHelper(
    write,
    fs: IFsNode,
    cwd: string[],
    strPath: string,
    cb: (node: IFsNode, absPath: string[]) => void,
) {
    const absPath = parsePath(cwd, strPath);
    const node = getFs(fs, absPath);

    if (!node) {
        write(`${pathToString(absPath)}: not found`);
        return;
    }

    cb(node, absPath);
}

export const catCmd: ICommand = {
    name: 'cat',
    run(_, args, props) {
        const { write, fs, cwd } = props;

        nodeHelper(write, fs, cwd, args, (node) => {
            if (isFile(node)) {
                if (node.cat) {
                    node.cat(node, props);
                }
            }
        });
    },
};

export const pwdCmd: ICommand = {
    name: 'pwd',
    run(_, args, { write, cwd }) {
        write(pathToString(cwd));
    },
};

export const lsCmd: ICommand = {
    name: 'ls',
    run(_, args, { write, cwd, fs }) {
        nodeHelper(write, fs, cwd, args, (node, absPath) => {
            if (isFile(node)) {
                write(pathToString(absPath));
                return;
            }

            if (isFolder(node)) {
                for (const child of node.children) {
                    write(child.name);
                }
            }
        });
    },
};

function printTree(node: IFsNode, prevSpacer: string, level: number, isLast: boolean, write) {
    const isRoot = level === 0;
    const currentSpacer = isRoot ? '' : isLast ? '└── ' : '├── ';
    const childSpacer = isRoot ? '' : isLast ? '    ' : '│   ';

    write(prevSpacer + currentSpacer + node.name);

    if (isFile(node)) {
        return;
    } else if (isFolder(node)) {
        node.children.forEach((child, i) => {
            const childIsLast = i === node.children.length - 1;

            printTree(child, prevSpacer + childSpacer, level + 1, childIsLast, write);
        });
    }
}

export const treeCmd: ICommand = {
    name: 'tree',
    run(_, args, { write, cwd, fs }) {
        nodeHelper(write, fs, cwd, args, (node) => {
            printTree(node, '', 0, true, write);
        });
    },
};

export const clearCmd: ICommand = {
    name: 'clear',
    run(_, args, { clear }) {
        clear();
    },
};

export const shrugCmd: ICommand = {
    name: 'shrug',
    run(_, args, { write }) {
        write('¯\\_(ツ)_/¯');
    },
};

export const rmCmd: ICommand = {
    name: 'rm',
    run(_, args, { write }) {
        if (args === '/') {
            const win = window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
            if (win) {
                win.focus();
            }
        }

        write(`rm: cannot remove ‘${args}’: Operation not permitted`);
    },
};

export default [cmdEcho, cmdCd, catCmd, pwdCmd, lsCmd, treeCmd, clearCmd, shrugCmd, rmCmd];
