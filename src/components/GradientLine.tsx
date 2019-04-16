import cx from 'classnames';
import * as React from 'react';
import * as styles from './GradientLine.scss';

interface IGradientLine {
    width?: number | string;
    height?: number | string;
    show?: boolean;
}

const GradientLine: React.FC<IGradientLine> = ({width = 300, height = 2, show = true}) => (
    <div style={{width: show ? width : 0, height}} className={cx(styles.line)}/>
);

export default GradientLine;
