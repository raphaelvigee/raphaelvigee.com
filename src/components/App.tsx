import * as React from 'react';
import Sidebar from './Sidebar';

import cx from 'classnames';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import * as styles from './App.scss';
import Contact from './Contact';
import Education from './Education';
import Experiences from './Experiences';
import Hacks from './Hacks';
import Home from './Home';
import Resume from './Resume';
import ScrollToTop from './ScrollTop';

const App: React.FC = () => {
    return (
        <Router>
            <ScrollToTop>
                <Route children={({location}) => {
                    const homepage = location.pathname === '/';

                    return (
                        <div className={cx(styles.app, homepage && styles.homepage)}>
                            <div className={styles.left}>
                                <Sidebar homepage={homepage}/>
                            </div>
                            <div className={styles.right}>
                                <Switch>
                                    <Route path='/' exact component={Home}/>
                                    <Route path='/education' exact component={Education}/>
                                    <Route path='/hacks' exact component={Hacks}/>
                                    <Route path='/experiences' exact component={Experiences}/>
                                    <Route path='/resume' exact component={Resume}/>
                                    <Route path='/contact' exact component={Contact}/>
                                    <Redirect to='/'/>
                                </Switch>
                            </div>
                        </div>
                    );
                }}/>
            </ScrollToTop>
        </Router>
    );
};

export default App;
