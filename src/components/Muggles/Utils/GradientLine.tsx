import { linearGradient } from 'polished';
import * as React from 'react';
import styled from 'styled-components';

interface GradientLineProps {
    width?: number | string;
    height?: number | string;
    show?: boolean;
}

const Line = styled.div`
    background-image: ${(props) =>
        linearGradient({
            colorStops: [props.theme.secondary, props.theme.primary],
            fallback: props.theme.primary,
            toDirection: 'to right',
        })};
    transition: 0.3s all;
`;

export default function GradientLine({ width = 300, height = 2, show = true }: GradientLineProps) {
    return <Line style={{ width: show ? width : 0, height }} />;
}
