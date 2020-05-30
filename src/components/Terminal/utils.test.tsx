import cowsay from './commands/cowsay';
import { parseArgs, usage } from './utils';

it('usage works', () => {
    const args = usage(cowsay);

    expect(args).toEqual('cowsay [str]');
});

it('parse args', () => {
    const args = parseArgs('arg1 "arg2" "arg3 with space"');

    expect(args).toEqual(['arg1', 'arg2', 'arg3 with space']);
});
