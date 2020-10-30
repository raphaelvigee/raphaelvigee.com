import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Fonts } from '../../styled';

interface NameProps {
    homepage: boolean;
}

const FirstName = styled.span`
    color: white;
`;

const LastName = styled.span`
    color: ${(props) => props.theme.secondary};
`;

const NamesContainer = styled(Link)`
    ${Fonts.LemonMilk};
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    font-size: 3.2em;
    margin-top: 0.4em;
    margin-bottom: 0.4em;

    &.h {
        writing-mode: unset;
        text-orientation: unset;
        transform: none;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;

        ${FirstName},
        ${LastName} {
            display: block;
            text-align: center;
            line-height: 2em;
        }
    }
`;

export default function Name({ homepage = false }: NameProps) {
    return (
        <NamesContainer to={'/'} className={homepage ? 'h' : ''}>
            <FirstName>Raphaël</FirstName>
            <LastName>Vigée</LastName>
        </NamesContainer>
    );
}
