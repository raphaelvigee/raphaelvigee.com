import React from 'react';
import Sidebar from "./Sidebar";

import styles from './App.scss';
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import Education from "./Education";
import Experiences from "./Experiences";
import ScrollToTop from "./ScrollTop";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                    <div className={styles.app}>
                        <div className={styles.left}>
                            <Route path={'/'} exact children={({match}) => (
                                <Sidebar homepage={!!match}/>
                            )}/>
                        </div>
                        <div className={styles.right}>
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/education" exact component={Education}/>
                                <Route path="/experiences" exact component={Experiences}/>
                                <Route path="/cv" exact component={() => "CV"}/>
                            </Switch>
                        </div>
                    </div>
                </ScrollToTop>
            </Router>
        );
    }
}
