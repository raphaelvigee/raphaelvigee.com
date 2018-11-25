import React from 'react';
import styles from './Form.scss';

export function InputText(props) {
    return (
        <input type="text" className={styles.textInput} {...props} />
    )
}

export function InputTextArea(props) {
    return (
        <textarea className={styles.textInput} rows={8} style={{resize: 'none'}} {...props} />
    )
}
