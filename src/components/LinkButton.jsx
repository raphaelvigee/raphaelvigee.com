import React from 'react';
import {NavLink} from "react-router-dom";

import styles from './Button.scss';

export default class LinkButton extends React.Component {
    render() {
        const {label, ...rest} = this.props;

        return (
            <NavLink className={styles.btn} {...rest}>
                {label}
            </NavLink>
        )
    }
}
