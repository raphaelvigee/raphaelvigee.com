import React from 'react';
import cx from 'classnames';

import styles from './SideMenu.scss';
import raccoon from '../assets/images/raccoon.svg';
import Name from "./Name";

export default class SideMenu extends React.Component {
    render() {
        return (
            <div className={cx(styles.sideMenu, this.props.homepage && styles.homepage)}>
                <Name homepage={this.props.homepage} />

                <div className={cx(styles.raccoonContainer)}>
                    <img src={raccoon} alt="Raccoon"/>
                    <span className={styles.label}>Contact</span>
                </div>
            </div>
        );
    }
}
