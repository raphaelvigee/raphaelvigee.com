import React from 'react';

import cx from 'classnames';
import styles from './GradientLine.scss';

export default function GradientLine({width = 300, height = 2, show = true}) {
    return (
        <div style={{width: show ? width : 0, height}} className={cx(styles.line)}/>
    )
}
