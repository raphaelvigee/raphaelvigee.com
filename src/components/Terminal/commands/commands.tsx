import { getFs, IFsNode, isFile, isFolder, parsePath, pathToString } from '../fs';
import { ICommand, t } from '../utils';

export const cmdEcho: ICommand = {
    name: 'echo',
    short: 'Print text to the terminal',
    args: [{ name: 'str' }],
    run({ write, args }) {
        write(args[0]);
    },
};

export const cmdCd: ICommand = {
    name: 'cd',
    short: 'Change directory',
    args: [{ name: 'directory', default: '.' }],
    run({ cwd, setCwd, write, fs, args }) {
        nodeHelper(write, fs, cwd, args[0], (node, absPath) => {
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
    short: 'Print file',
    args: [{ name: 'file', mandatory: true }],
    run(props) {
        const { write, fs, cwd, args } = props;

        nodeHelper(write, fs, cwd, args[0], (node) => {
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
    short: 'Print current directory name',
    args: [],
    run({ write, cwd }) {
        write(pathToString(cwd));
    },
};

export const lsCmd: ICommand = {
    name: 'ls',
    short: 'List directory content',
    args: [{ name: 'path' }],
    run({ write, cwd, fs, args }) {
        nodeHelper(write, fs, cwd, args[0], (node, absPath) => {
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
    short: 'Print hierarchical view of the filesystem',
    args: [{ name: 'path', default: '.' }],
    run({ write, cwd, fs, args }) {
        nodeHelper(write, fs, cwd, args[0], (node) => {
            printTree(node, '', 0, true, write);
        });
    },
};

export const clearCmd: ICommand = {
    name: 'clear',
    short: 'Clear the terminal',
    args: [],
    run({ clear }) {
        clear();
    },
};

export const shrugCmd: ICommand = {
    name: 'shrug',
    short: '¯\\_(ツ)_/¯',
    args: [],
    run({ write }) {
        write('¯\\_(ツ)_/¯');
    },
};

const dino = t(`
               __
              / _)
     _/\\/\\/\\_/ /
   _|         /
 _|  (  | (  |
/__.-'|_|--|_|  <- You
`);

export const perlCmd: ICommand = {
    name: 'perl',
    short: 'The Perl programming language',
    args: [],
    anyArgs: true,
    run({ write }) {
        write(dino);
    },
};

export const rmCmd: ICommand = {
    name: 'rm',
    short: 'Remove file/directory',
    args: [{ name: 'path', mandatory: true }],
    run({ write, args }) {
        if (args[0] === '/') {
            const win = window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
            if (win) {
                win.focus();
            }
        }

        write(`rm: cannot remove ‘${args}’: Operation not permitted`);
    },
};
