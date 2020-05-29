import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export default function Button({ label, ...rest }: ButtonProps) {
    return (
        <button className={styles.btn} {...rest}>
            {label}
        </button>
    );
}
