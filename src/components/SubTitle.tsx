import {HTMLAttributes} from 'react';
import * as React from 'react';
import * as styles from './SubTitle.scss';

interface ISubTitle extends HTMLAttributes<HTMLHeadingElement> {
    label: string;
}

const SubTitle: React.FC<ISubTitle> = ({label, ...rest}) => (
    <h3 className={styles.subtitle} {...rest}>{label}</h3>
);

export default SubTitle;
