import * as React from 'react';
import { ICommand, RunProps } from '../../utils';
import Meme from './Meme';

const jokes = [
    'Python',
    "I'm starting a new side project that I'm gonna finish",
    "Math isn't important for programming",
    'I program in HTML',
    'Tests',
    'This code is self documenting',
];

const andotherhilariousjokesyoucantellyourself: ICommand = {
    name: 'andotherhilariousjokesyoucantellyourself',
    short: 'xxx and other hilarious jokes you can tell yourself',
    args: [{ name: 'joke', default: '' }],
    run({ write, args }: RunProps) {
        let joke = args[0];

        if (!joke) {
            joke = jokes[Math.floor(Math.random() * jokes.length)];
        }

        write(<Meme joke={joke} />);
    },
};

export default andotherhilariousjokesyoucantellyourself;
