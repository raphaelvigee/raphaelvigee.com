import React from "react";

import styles from './SubTitle.scss';

export default function SubTitle({label, ...rest}) {
    return (
        <h3 className={styles.subtitle} {...rest}>{label}</h3>
    )
}
