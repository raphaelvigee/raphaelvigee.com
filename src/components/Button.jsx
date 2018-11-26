import React from 'react';

import styles from './Button.scss';

export default class Button extends React.Component {
    render() {
        const {label, ...rest} = this.props;

        return (
            <button className={styles.btn} {...rest}>
                {label}
            </button>
        )
    }
}

export function LinkButton({label, ...rest}) {
    return (
        <a className={styles.btn} {...rest}>
            {label}
        </a>
    )
}
