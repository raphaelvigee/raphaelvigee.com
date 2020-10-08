import { useEffect } from 'react';
import * as React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styled';
import Muggles from './Muggles/Muggles';
import X from './X';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './Muggles/Utils/ScrollTop';

const theme: DefaultTheme = {
    primary: '#011F4C',
    secondary: '#FF3366',
    grey: '#616161',
    lightgrey: '#F4F4F4',
};

export default function App() {
    useEffect(() => {
        console.info(`Since you are reading this, you should checkout ${window.location.origin}/x ;)`);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <ScrollToTop>
                    <Switch>
                        <Route path="/x" exact component={X} />
                        <Route>
                            {({ location }) => {
                                const homepage = location.pathname === '/';

                                return <Muggles homepage={homepage} />;
                            }}
                        </Route>
                    </Switch>
                </ScrollToTop>
            </Router>
        </ThemeProvider>
    );
}
