import React from 'react';

import styles from './Name.scss';
import cx from 'classnames';
import {Link} from "react-router-dom";

export default class Name extends React.Component {
    render() {
        return (
            <Link to={'/'} className={cx(styles.namesContainer, this.props.homepage && styles.homepage)}>
                    <span className={cx(styles.firstName)}>
                        Raphaël
                    </span>
                        <span className={cx(styles.lastName)}>
                        Vigée
                    </span>
            </Link>
        )
    }
}
