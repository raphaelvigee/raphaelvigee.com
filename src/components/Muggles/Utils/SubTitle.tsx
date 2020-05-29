import { HTMLAttributes } from 'react';
import * as React from 'react';
import styles from './SubTitle.scss';

interface SubTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    label: string;
}

export default function SubTitle({ label, ...rest }: SubTitleProps) {
    return (
        <h3 className={styles.subtitle} {...rest}>
            {label}
        </h3>
    );
}
