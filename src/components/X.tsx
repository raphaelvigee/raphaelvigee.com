import * as React from 'react';
import { Pages } from '../content';
import TiltRaccoon from './Muggles/TiltRaccoon';
import cmds from './Terminal/commands/index';
import { FsFile, FsFolder, IFsNode } from './Terminal/fs';
import Terminal from './Terminal/Terminal';

const motd = (
    <pre>
        {`
  ___           _             _  __   ___
 | _ \\__ _ _ __| |_  __ _ ___| | \\ \\ / (_)__ _ ___ ___
 |   / _\` | '_ \\ ' \\/ _\` / -_) |  \\ V /| / _\` / -_) -_)
 |_|_\\__,_| .__/_||_\\__,_\\___|_|   \\_/ |_\\__, \\___\\___|
      _   |_|                            |___/
 __ _/ | /  \\
 \\ V / || () |
  \\_/|_(_)__/


Feeling lost? try help
`}
    </pre>
);

const pagesFiles = Pages.map(
    (p) =>
        new FsFile({
            name: `${p.path}.txt`,
            cat: p.cat,
        }),
);

const fs: IFsNode = new FsFolder({
    name: '/',
    children: [
        new FsFolder({
            name: 'home',
            children: [
                new FsFolder({
                    name: 'raphaelvigee',
                    children: [
                        ...pagesFiles,
                        new FsFile({
                            name: 'raccoon.png',
                            cat: (_, { write }) => {
                                write(
                                    <div style={{ width: '10vw', padding: 10 }}>
                                        <TiltRaccoon />
                                    </div>,
                                );
                            },
                        }),
                    ],
                }),
            ],
        }),
    ],
});

export default function X() {
    return <Terminal fs={fs} initCwd={['home', 'raphaelvigee']} motd={motd} cmds={cmds} />;
}
