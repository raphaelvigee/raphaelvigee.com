import { IRunProps, t } from '../utils';

const cow = t(`
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`);

const cowsay = {
    name: 'cowsay',
    run(_, text: string, { write }: IRunProps) {
        if (text.length === 0) {
            text = 'Hello';
        }

        const lines = (text.match(/.{0,39}/g) as string[]).filter((l) => l.length);

        const borderh = ' ' + '-'.repeat(lines[0].length + 2);

        const bubble = lines.map((l, i) => {
            const isFirst = i === 0;
            const isLast = i === lines.length - 1;

            if (isFirst && isLast) {
                return `${borderh}\n< ${l} >\n${borderh}`;
            } else if (isFirst) {
                return `${borderh}\n/ ${l} \\`;
            } else if (isLast) {
                return `\\ ${l} /\n${borderh}`;
            } else {
                return `| ${l} |`;
            }
        });

        write(`${bubble.join('\n')}\n${cow}`);
    },
};

export default cowsay;
