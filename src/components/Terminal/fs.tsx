import {IRunProps} from './utils';

export interface IFsNode {
    name: string;
}

export class FsFolder implements IFsNode {
    public name: string;
    public children: IFsNode[];

    constructor({name, children}: { name: string, children: IFsNode[] }) {
        this.name = name;
        this.children = children;
    }
}

export class FsFile implements IFsNode {
    public name: string;
    public cat: (node: FsFile, props: IRunProps) => void;

    constructor({name, cat}: { name: string, cat: (node: FsFile, props: IRunProps) => void }) {
        this.name = name;
        this.cat = cat;
    }
}

export function catOpen(url: string) {
    return () => {
        const win = window.open(url, '_blank');
        if (win) {
            win.focus();
        }
    };
}

export function join(cwd: string[], path: string[]) {
    return [...cwd, ...path];
}

export function pathToString(path: string[]) {
    return '/' + path.join('/');
}

export function stringToPath(strPath: string) {
    if (strPath === '') {
        return [];
    }

    return strPath.split('/').filter((p) => p !== '');
}

export const isFile = (node: IFsNode): node is FsFile => node instanceof FsFile;
export const isFolder = (node: IFsNode): node is FsFolder => node instanceof FsFolder;

function findInChildren(children: IFsNode[], name: string) {
    for (const child of children) {
        if (child.name === name) {
            return child;
        }
    }

    return null;
}

export function getFs(fs: IFsNode, targetPath: string[]) {
    let node = fs;
    let path = targetPath;

    while (path.length > 0) {
        if (!isFolder(node)) {
            return null;
        }

        const folderNode = node as FsFolder;

        const [current, ...rest] = path;

        const child = findInChildren(folderNode.children, current);

        if (child) {
            node = child;
            path = rest;
        } else {
            return null;
        }
    }

    return node;
}

export function parsePath(cwd: string[], strPath: string) {
    const isPathAbs = strPath[0] === '/';
    const path = stringToPath(strPath);

    return isPathAbs ? path : join(cwd, path);
}