import React from 'react';
import Sidebar from "./Sidebar";

import styles from './App.scss';
import Home from "./Home";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Education from "./Education";
import Experiences from "./Experiences";
import ScrollToTop from "./ScrollTop";
import Resume from "./Resume";
import Contact from "./Contact";
import cx from 'classnames';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                    <Route path={'/'} exact children={({match}) => (
                        <div className={cx(styles.app, match && styles.homepage)}>
                            <div className={styles.left}>
                                <Sidebar homepage={match}/>
                            </div>
                            <div className={styles.right}>
                                <Switch>
                                    <Route path="/" exact component={Home}/>
                                    <Route path="/education" exact component={Education}/>
                                    <Route path="/experiences" exact component={Experiences}/>
                                    <Route path="/resume" exact component={Resume}/>
                                    <Route path="/contact" exact component={Contact}/>
                                    <Route render={() => <Redirect to={'/'}/>}/>
                                </Switch>
                            </div>
                        </div>
                    )}/>
                </ScrollToTop>
            </Router>
        );
    }
}
