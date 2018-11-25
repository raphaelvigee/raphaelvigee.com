import React from 'react';

import styles from './Button.scss';

export default class Button extends React.Component {
    render() {
        const {label, ...rest} = this.props;

        return (
            <div className={styles.btn} {...rest}>
                {label}
            </div>
        )
    }
}
