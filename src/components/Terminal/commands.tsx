import * as React from 'react';
import TiltRaccoon from '../TiltRaccoon';
import {getFs, IFsNode, isFile, isFolder, join, parsePath, pathToString, stringToPath} from './fs';
import {ICommand} from './utils';

export const cmdEcho: ICommand = {
    name: 'echo',
    run(_, args, {write}) {
        write(args);
    },
};

export const cmdCd: ICommand = {
    name: 'cd',
    run(_, args, {cwd, setCwd, write, fs}) {
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
        const {write, fs, cwd} = props;

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
    run(_, args, {write, cwd}) {
        write(pathToString(cwd));
    },
};

export const lsCmd: ICommand = {
    name: 'ls',
    run(_, args, {write, cwd, fs}) {
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

function printTree(node: IFsNode, level: number, write) {
    if (isFile(node)) {
        return;
    }

    let spacer = '';
    for (let l = 0; l < level; l++) {
        if (l === level - 1) {
            spacer += '├── ';
        } else {
            spacer += '│   ';
        }
    }

    if (isFolder(node)) {
        node.children.forEach((child, i) => {
            write(spacer + child.name);
            printTree(child, level + 1, write);
        });
    }
}

export const treeCmd: ICommand = {
    name: 'tree',
    run(_, args, {write, cwd, fs}) {
        nodeHelper(write, fs, cwd, args, (node, absPath) => {
            printTree(node, 0, write);
        });
    },
};

export const clearCmd: ICommand = {
    name: 'clear',
    run(_, args, {clear}) {
        clear();
    },
};

export const shrugCmd: ICommand = {
    name: 'shrug',
    run(_, args, {write}) {
        write('¯\\_(ツ)_/¯');
    },
};

export default [cmdEcho, cmdCd, catCmd, pwdCmd, lsCmd, treeCmd, clearCmd, shrugCmd];
