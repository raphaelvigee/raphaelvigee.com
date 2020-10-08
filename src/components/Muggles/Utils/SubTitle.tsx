import { HTMLAttributes } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { Fonts } from '../../../styled';

interface SubTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    label: string;
}

const H3 = styled.h3`
    ${Fonts.LemonMilk};
    font-size: 1.5em;
    color: ${(props) => props.theme.primary};
    font-weight: normal;
`;

export default function SubTitle({ label, ...rest }: SubTitleProps) {
    return <H3 {...rest}>{label}</H3>;
}
