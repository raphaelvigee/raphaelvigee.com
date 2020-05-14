import * as React from 'react';
import {AnchorHTMLAttributes, ButtonHTMLAttributes} from 'react';
import styles from './Button.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

const Button: React.FC<IButton> = ({label, ...rest}) => {
    return (
        <button className={styles.btn} {...rest}>
            {label}
        </button>
    );
};
export default Button;

interface ILinkButton extends AnchorHTMLAttributes<HTMLAnchorElement> {
    label: string;
}

export const LinkButton: React.FC<ILinkButton> = ({label, ...rest}) => {
    return (
        <a className={styles.btn} {...rest}>
            {label}
        </a>
    );
};
