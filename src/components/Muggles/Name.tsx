import cx from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './Name.scss';

interface NameProps {
    homepage: boolean;
}

export default function Name({ homepage = false }: NameProps) {
    return (
        <Link to={'/'} className={cx(styles.namesContainer, homepage && styles.homepage)}>
            <span className={cx(styles.firstName)}>Raphaël</span>
            <span className={cx(styles.lastName)}>Vigée</span>
        </Link>
    );
}
