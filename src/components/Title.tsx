import {HTMLAttributes} from 'react';
import * as React from 'react';
import GradientLine from './GradientLine';
import styles from './Title.scss';

interface ITitle extends HTMLAttributes<HTMLDivElement> {
    label: string;
}

const Title: React.FC<ITitle> = ({label, ...rest}) => {
    return (
        <div {...rest}>
            <h1 className={styles.title}>{label}</h1>
            <GradientLine width={100}/>
        </div>
    );
};

export default Title;
