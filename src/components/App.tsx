import {useEffect} from 'react';
import * as React from 'react';
import Pages from './pages';
import Sidebar from './Sidebar';

import cx from 'classnames';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import CVShort from '../assets/cv/CV_Raphael_Vigee.short.pdf';
import styles from './App.scss';
import Contact from './Contact';
import Education from './Education';
import Experiences from './Experiences';
import Hacks from './Hacks';
import Home from './Home';
import Resume from './Resume';
import ScrollToTop from './ScrollTop';
import cmds from './Terminal/commands';
import {catOpen, FsFile, FsFolder, IFsNode} from './Terminal/fs';
import Terminal from './Terminal/Terminal';

const motd = <pre>
{`
  ___           _             _  __   ___
 | _ \\__ _ _ __| |_  __ _ ___| | \\ \\ / (_)__ _ ___ ___
 |   / _\` | '_ \\ ' \\/ _\` / -_) |  \\ V /| / _\` / -_) -_)
 |_|_\\__,_| .__/_||_\\__,_\\___|_|   \\_/ |_\\__, \\___\\___|
      _   |_|                            |___/
 __ _/ | /  \\
 \\ V / || () |
  \\_/|_(_)__/


Feeling lost? try help
`}
</pre>;

const pagesFiles = Pages.map((p) => new FsFile({
    name: p.path,
    cat: (_, props) => {
        const Component = p.component;
        props.write(<Component />);
    },
}));

const fs: IFsNode = new FsFolder({
    name: '',
    children: [
        new FsFolder({
            name: 'usr',
            children: [
                new FsFolder({
                    name: 'raphaelvigee',
                    children: [
                        ...pagesFiles,
                        new FsFile({
                            name: 'resume.pdf',
                            cat: catOpen(CVShort),
                        }),
                    ],
                }),
            ],
        }),
    ],
});

export default function App() {
    useEffect(() => {
        // tslint:disable-next-line:no-console
        console.info(`Since you are reading this, you should checkout ${window.location.origin}/x ;)`);
    }, []);

    return (
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route path='/x' exact render={() =>
                        <Terminal fs={fs} initCwd={['usr', 'raphaelvigee']} motd={motd} cmds={cmds} />
                    }/>

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
                                    {Pages.map((p) =>
                                        <Route key={p.path} path={`/${p.path}`} exact component={p.component}/>)}
                                    <Redirect to='/'/>
                                </Switch>
                            </div>
                        </div>
                    );
                }}/>
                </Switch>
            </ScrollToTop>
        </Router>
    );
}
