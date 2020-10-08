import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Pages } from '../../content';
import { Devices } from '../../styled';
import Home from './Home';
import Sidebar from './Sidebar';

const leftRight = css`
    min-height: 100vh;
    display: flex;
`;

const Left = styled.div`
    ${leftRight};
    width: 100px;
`;
const Right = styled.div`
    ${leftRight};
    flex: 1;
`;
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;

    &.h {
        ${Left} {
            width: 50%;
        }
    }

    @media ${Devices.ltTablet} {
        font-size: 70%;
        &:not(.h) {
            ${Left} {
                width: 50px;
            }
        }

        &.h {
            flex-direction: column;

            ${Left} {
                width: 100%;
            }
        }
    }
`;

export default function Muggles({ homepage }: { homepage: boolean }) {
    return (
        <Container className={homepage ? 'h' : ''}>
            <Left>
                <Sidebar homepage={homepage} />
            </Left>
            <Right>
                <Switch>
                    <Route path="/" exact component={Home} />
                    {Pages.map((p) => (
                        <Route key={p.path} path={`/${p.path}`} exact component={p.component} />
                    ))}
                    <Redirect to="/" />
                </Switch>
            </Right>
        </Container>
    );
}
