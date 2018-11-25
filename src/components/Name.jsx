import React from 'react';

import styles from './Name.scss';
import cx from 'classnames';

export default class Name extends React.Component {
    render() {
        return (
            <div className={cx(styles.namesContainer, this.props.homepage && styles.homepage)}>
                <span className={cx(styles.firstName)}>
                    Raphaël
                </span>
                <span className={cx(styles.lastName)}>
                    Vigée
                </span>
            </div>
        )
    }
}
