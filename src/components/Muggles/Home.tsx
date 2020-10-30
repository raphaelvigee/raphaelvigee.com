import * as React from 'react';
import styled, { css } from 'styled-components';
import { Pages } from '../../content';
import { Fonts } from '../../styled';
import { LinkButton } from './Utils/Button';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const topBottomBase = css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Top = styled.div`
    ${topBottomBase}
`;

const Bottom = styled.div`
    ${topBottomBase}
`;

const Description = styled.span`
    ${Fonts.LemonMilk};
    width: 80%;
    color: ${(props) => props.theme.primary};
    font-size: 3.2em;
    text-align: center;
    line-height: 2em;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80%;
`;

export default function Home() {
    return (
        <Container>
            <Top>
                <Description>I'm a Software Engineer</Description>
            </Top>
            <Bottom>
                <ButtonsContainer>
                    {Pages.map((p) => (
                        <LinkButton key={p.path} to={p.path} label={p.name} />
                    ))}
                </ButtonsContainer>
            </Bottom>
        </Container>
    );
}
