import React from 'react';
import cx from 'classnames';

import styles from './Sidebar.scss';
import Name from "./Name";
import {NavLink, Route} from "react-router-dom";
import GradientLine from "./GradientLine";
import TiltRaccoon from "./TiltRaccoon";

function MenuItem({to, children: label}) {
    return (
        <Route path={to} exact children={({match}) => (
            <NavLink to={to} className={cx(styles.item)}>
                <span className={styles.first}>
                    {label.substring(0, 1)}
                </span>
                <span className={styles.rest}>
                    {label.substring(1)}
                </span>
                <GradientLine show={!!match} width={'60%'}/>
            </NavLink>
        )}/>
    )
}

export default class Sidebar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className={cx(styles.sidebar, this.props.homepage && styles.homepage)}>
                    <div className={cx(styles.content)}>
                        <Name homepage={this.props.homepage}/>

                        <div className={cx(styles.raccoonContainer)}>
                            <TiltRaccoon/>
                            <span className={styles.label}>Contact</span>
                        </div>
                    </div>

                    <div className={styles.menu}>
                        <MenuItem to={'/'}>Home</MenuItem>
                        <MenuItem to={'/education'}>Education</MenuItem>
                        <MenuItem to={'/experiences'}>Experiences</MenuItem>
                        <MenuItem to={'/cv'}>CV</MenuItem>
                    </div>
                </div>
                <div className={cx(styles.sidebarSpacer, this.props.homepage && styles.homepage)}/>
            </React.Fragment>
        );
    }
}
