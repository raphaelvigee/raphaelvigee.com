import * as React from 'react';
import styled from 'styled-components';
import { Devices, Fonts } from '../../../../styled';
import useScrollBottom from '../../useScrollBottom';
import meme from './meme.jpg';

const Container = styled.div`
    width: 50vw;
    position: relative;

    img {
        width: 100%;
        height: auto;
    }

    @media ${Devices.ltTablet} {
        width: 100%;
    }
`;

const Joke = styled.div`
    ${Fonts.Roboto};
    position: absolute;
    text-align: center;
    color: black;
    top: 15%;
    left: 17%;
    right: 17%;
    height: 30%;
    font-size: 180%;
    font-weight: bold;
    word-break: break-word;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export default function Meme({ joke }: { joke: string }) {
    const scroll = useScrollBottom();

    return (
        <Container>
            <Joke>
                <span>{joke}</span>
            </Joke>
            <img src={meme} onLoad={scroll} />
        </Container>
    );
}
