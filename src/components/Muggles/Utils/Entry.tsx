import { ReactNode, useState } from 'react';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { Fonts } from '../../../styled';

interface EntryProps {
    date?: ReactNode;
    title?: ReactNode;
    details?: ReactNode;
    location?: ReactNode;
    extras?: ReactNode;
}

const DateDetails = styled.div`
    color: ${(props) => props.theme.grey};
    font-size: 0.5em;
    margin-bottom: 10px;
`;

const Title = styled.div`
    color: ${(props) => props.theme.primary};
    margin-bottom: 10px;
`;

const Location = styled.div`
    ${Fonts.Roboto};
    color: black;
    margin-bottom: 10px;
`;

const Extras = styled.div`
    font-size: 0.7em;
    color: black;
    transition: max-height 0.5s;
    overflow: hidden;

    ul {
        margin-left: -1em;
    }
`;

const ExtrasLine = styled.div`
    border-top: 1px solid ${(props) => props.theme.lightgrey};
    margin-bottom: 10px;
`;

const scale = 1.02;
const Container = styled.div<{ open: boolean; clickable: boolean }>`
    ${Fonts.RobotoLt};
    border-left: 4px solid ${(props) => props.theme.primary};
    padding: 0.6em 0.6em 0.6em 1em;
    font-size: 1.5em;
    margin-top: 1em;
    background: white;
    transition: transform 0.2s;
    transform: scale(${({ open, clickable }) => (clickable && open ? scale : 1)});

    & > *:last-child {
        margin-bottom: 0;
    }

    ${({ clickable }) =>
        clickable &&
        css`
            cursor: pointer;

            &:hover {
                transform: scale(${scale});
            }
        `}

    ${Extras} {
        max-height: ${({ open }) => (open ? '999px' : '0px')};
    }
`;

const Plus = styled.div`
    ${Fonts.RobotoLt};
    float: right;
    font-size: 2em;
    color: ${(props) => props.theme.primary};
    line-height: 0.5em;
    opacity: 0.5;
`;

export default function Entry({
    date = null,
    title = null,
    details = null,
    location = null,
    extras = null,
}: EntryProps) {
    const [open, setOpen] = useState(false);

    function toggle() {
        if (!extras) {
            return;
        }

        setOpen((o) => !o);
    }

    return (
        <Container onClick={toggle} open={open} clickable={!!extras}>
            {extras && <Plus>+</Plus>}

            {date && <DateDetails>{date}</DateDetails>}

            {title && <Title>{title}</Title>}

            {details && <DateDetails>{details}</DateDetails>}

            {location && <Location>{location}</Location>}

            {extras && (
                <Extras>
                    <ExtrasLine />
                    {extras}
                </Extras>
            )}
        </Container>
    );
}
