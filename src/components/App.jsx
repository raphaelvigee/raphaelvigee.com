import React from 'react';
import SideMenu from "./SideMenu";

import styles from './App.scss';
import Home from "./Home";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            homepage: true,
        }
    }

    toggle() {
        this.setState(state => ({
            homepage: !state.homepage,
        }))
    }

    render() {
        return (
            <div className={styles.app}>
                <div className={styles.left}>
                    <SideMenu homepage={this.state.homepage}/>
                </div>
                <div className={styles.right}>
                    <Home />
                </div>
            </div>
        )
    }
}
