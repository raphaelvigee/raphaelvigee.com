import { FsFolder } from '../fs';
import { RunCommandProps } from '../utils';

export function mockProps(extra: Partial<RunCommandProps> = {}) {
    let cwd: string[] = extra.cwd || [];
    const lines: React.ReactNode[] = [];

    function getState() {
        return { lines, cwd };
    }

    const props: RunCommandProps = {
        clear: () => undefined,
        cwd: cwd,
        fs: new FsFolder({ name: '/', children: [] }),
        setCwd(v) {
            if (typeof v === 'function') {
                cwd = v(cwd);
            } else {
                cwd = v;
            }
        },
        write(c) {
            lines.push(c);
        },
        ...extra,
    };

    return [props, getState] as const;
}
