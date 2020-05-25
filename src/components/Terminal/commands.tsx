import * as React from 'react';
import {Redirect} from 'react-router';
import {ICommand} from './Terminal';

export const cmdEcho: ICommand = {
    name: 'echo',
    run(_, args, {write}) {
        write(args);
    },
};

export const cmdCd: ICommand = {
    name: 'cd',
    run(_, args, {write}) {
        if (args === '/') {
            write(<Redirect to={'/'} />);
            return;
        }

        write(`${args}: not found`);
    },
};

export default [cmdEcho, cmdCd];
