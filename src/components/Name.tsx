import cx from 'classnames';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './Name.scss';

interface IName {
    homepage: boolean;
}

const Name: React.FC<IName> = ({homepage = false}) => (
    <Link to={'/'} className={cx(styles.namesContainer, homepage && styles.homepage)}>
        <span className={cx(styles.firstName)}>
            Raphaël
        </span>
        <span className={cx(styles.lastName)}>
            Vigée
        </span>
    </Link>
);

export default Name;
