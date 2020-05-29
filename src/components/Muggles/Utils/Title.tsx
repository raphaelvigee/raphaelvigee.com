import { HTMLAttributes } from 'react';
import * as React from 'react';
import GradientLine from './GradientLine';
import styles from './Title.scss';

interface TitleProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
}

export default function Title({ label, ...rest }: TitleProps) {
    return (
        <div {...rest}>
            <h1 className={styles.title}>{label}</h1>
            <GradientLine width={100} />
        </div>
    );
}
