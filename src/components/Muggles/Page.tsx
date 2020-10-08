import { PropsWithChildren } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { Devices, Fonts } from '../../styled';

const Container = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    ${Fonts.RobotoLt};
    background: ${(props) => props.theme.lightgrey};
    width: 70%;
    padding: 3em;

    @media ${Devices.ltTablet} {
        width: 100%;
    }

    @media ${Devices.gtDesktop} {
        width: 60%;
    }
`;

export default function Page({ children }: PropsWithChildren<unknown>) {
    return (
        <Container>
            <Content>{children}</Content>
        </Container>
    );
}
