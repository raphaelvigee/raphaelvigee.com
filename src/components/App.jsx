import React from 'react';
import SideMenu from "./SideMenu";

import styles from './App.scss';
import Home from "./Home";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className={styles.app}>
                    <div className={styles.left}>
                        <Route path={'/'} exact children={({match}) => (
                            <SideMenu homepage={!!match}/>
                        )} />
                    </div>
                    <div className={styles.right}>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/education" exact component={() => "Education"} />
                            <Route path="/experiences" exact component={() => "Experiences"} />
                            <Route path="/cv" exact component={() => "CV"} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
