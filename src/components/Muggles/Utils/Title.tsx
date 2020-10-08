import { HTMLAttributes } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { Fonts } from '../../../styled';
import GradientLine from './GradientLine';

interface TitleProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
}

const H1 = styled.div`
    ${Fonts.LemonMilk};
    font-size: 2.5em;
    color: ${(props) => props.theme.primary};
    margin: 0 0 5px;
`;

export default function Title({ label, ...rest }: TitleProps) {
    return (
        <div {...rest}>
            <H1>{label}</H1>
            <GradientLine width={100} />
        </div>
    );
}
