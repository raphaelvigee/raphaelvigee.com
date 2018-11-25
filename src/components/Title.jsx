import React from "react";

import styles from './Title.scss';
import GradientLine from "./GradientLine";

export default function Title({label, ...rest}) {
    return (
        <div {...rest}>
            <h1 className={styles.title}>{label}</h1>
            <GradientLine width={100}/>
        </div>
    )
}
