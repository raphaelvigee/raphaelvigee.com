import { FsFile, FsFolder } from '../fs';
import { runSingleCommand } from '../utils';
import { catCmd, cmdCd, cmdEcho, dino, lsCmd, perlCmd, pwdCmd, rmCmd, shrugCmd, treeCmd } from './commands';
import { mockProps } from './testutils';

it('echo with no parameters works', () => {
    const [props, getState] = mockProps();

    runSingleCommand(cmdEcho, [], props);

    const { lines } = getState();

    expect(lines).toEqual(['']);
});

it('echo with text works', () => {
    const [props, getState] = mockProps();

    runSingleCommand(cmdEcho, ['hello'], props);

    const { lines } = getState();

    expect(lines).toEqual(['hello']);
});

it('shrug works', () => {
    const [props, getState] = mockProps();

    runSingleCommand(shrugCmd, [], props);

    const { lines } = getState();

    expect(lines).toEqual(['¯\\_(ツ)_/¯']);
});

const mfs = new FsFolder({
    name: '/',
    children: [
        new FsFolder({
            name: 'f1',
            children: [
                new FsFolder({
                    name: 'f11',
                    children: [],
                }),
                new FsFolder({
                    name: 'f12',
                    children: [],
                }),
            ],
        }),
        new FsFolder({
            name: 'f2',
            children: [
                new FsFolder({
                    name: 'f21',
                    children: [],
                }),
                new FsFolder({
                    name: 'f22',
                    children: [],
                }),
            ],
        }),
        new FsFile({
            name: 'somefile',
            cat(_, { write }) {
                write('l1');
                write('l2');
            },
        }),
    ],
});

it('cd absolute path works', () => {
    const [props, getState] = mockProps({ fs: mfs });

    runSingleCommand(cmdCd, ['/f1'], props);

    const { cwd } = getState();

    expect(cwd).toEqual(['f1']);
});

it('cd relative path works', () => {
    const [props, getState] = mockProps({ fs: mfs, cwd: ['f1'] });

    runSingleCommand(cmdCd, ['f11'], props);

    const { cwd } = getState();

    expect(cwd).toEqual(['f1', 'f11']);
});

it('cd relative path with dots works', () => {
    const [props, getState] = mockProps({ fs: mfs, cwd: ['f1'] });

    runSingleCommand(cmdCd, ['./f11/.././../f2'], props);

    const { cwd } = getState();

    expect(cwd).toEqual(['f2']);
});

it('cat works', () => {
    const [props, getState] = mockProps({ fs: mfs });

    runSingleCommand(catCmd, ['somefile'], props);

    const { lines } = getState();

    expect(lines).toEqual(['l1', 'l2']);
});

it('pwd works', () => {
    const [props, getState] = mockProps({ cwd: ['f1', 'f2', 'f3'] });

    runSingleCommand(pwdCmd, [], props);

    const { lines } = getState();

    expect(lines).toEqual(['/f1/f2/f3']);
});

it('ls works', () => {
    const [props, getState] = mockProps({ fs: mfs });

    runSingleCommand(lsCmd, [], props);

    const { lines } = getState();

    expect(lines).toEqual(['f1', 'f2', 'somefile']);
});

it('tree works', () => {
    const [props, getState] = mockProps({ fs: mfs });

    runSingleCommand(treeCmd, [], props);

    const { lines } = getState();

    expect(lines).toEqual([
        '/',
        '├── f1',
        '│   ├── f11',
        '│   └── f12',
        '├── f2',
        '│   ├── f21',
        '│   └── f22',
        '└── somefile',
    ]);
});

it('perl works', () => {
    const [props, getState] = mockProps({ fs: mfs });

    runSingleCommand(perlCmd, [], props);

    const { lines } = getState();

    expect(lines).toEqual([dino]);
});

it('rm works', () => {
    const [props, getState] = mockProps({ fs: mfs });

    runSingleCommand(rmCmd, ['/somefile'], props);

    const { lines } = getState();

    expect(lines).toEqual(['rm: cannot remove ‘/somefile’: Operation not permitted']);
});
