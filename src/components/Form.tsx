import {InputHTMLAttributes, TextareaHTMLAttributes} from 'react';
import * as React from 'react';
import styles from './Form.scss';

export const InputText: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => (
    <input type='text' className={styles.textInput} {...props} />
);

export const InputTextArea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
    <textarea className={styles.textInput} rows={8} style={{resize: 'none'}} {...props} />
);
