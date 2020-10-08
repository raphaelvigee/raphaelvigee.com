import { ReactNode } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { Fonts } from '../../../styled';

interface EntryProps {
    date?: ReactNode;
    title?: ReactNode;
    details?: ReactNode;
    location?: ReactNode;
}

const Container = styled.div`
    ${Fonts.RobotoLt};
    border-left: 4px solid ${(props) => props.theme.primary};
    padding: 0.6em 0.6em 0.6em 1em;
    font-size: 1.5em;
    margin-top: 1em;
    background: white;

    & > *:last-child {
        margin-bottom: 0;
    }
`;

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

export default function Entry({ date = null, title = null, details = null, location = null }: EntryProps) {
    return (
        <Container>
            {date && <DateDetails>{date}</DateDetails>}

            {title && <Title>{title}</Title>}

            {details && <DateDetails>{details}</DateDetails>}

            {location && <Location>{location}</Location>}
        </Container>
    );
}
