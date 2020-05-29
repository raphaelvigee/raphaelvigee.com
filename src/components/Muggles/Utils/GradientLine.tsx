import cx from 'classnames';
import * as React from 'react';
import styles from './GradientLine.scss';

interface GradientLineProps {
    width?: number | string;
    height?: number | string;
    show?: boolean;
}

export default function GradientLine({ width = 300, height = 2, show = true }: GradientLineProps) {
    return <div style={{ width: show ? width : 0, height }} className={cx(styles.line)} />;
}
