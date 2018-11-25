import React from 'react';
import Sidebar from "./Sidebar";

import styles from './App.scss';
import Home from "./Home";
import {BrowserRouter as Router, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Education from "./Education";
import Experiences from "./Experiences";
import ScrollToTop from "./ScrollTop";
import Resume from "./Resume";
import Contact from "./Contact";

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
                                <Route path="/resume" exact component={Resume}/>
                                <Route path="/contact" exact component={Contact}/>
                                <Route render={() => <Redirect to={'/'} />}/>
                            </Switch>
                        </div>
                    </div>
                </ScrollToTop>
            </Router>
        );
    }
}
