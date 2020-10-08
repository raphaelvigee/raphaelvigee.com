import { grayscale, lighten } from 'polished';
import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Fonts } from '../../../styled';

const First = styled.span``;

const base = css`
    ${Fonts.LemonMilk};

    background: ${(props) => props.theme.primary};
    color: white;
    padding: 0.5em;
    cursor: pointer;
    font-size: 1.5em;
    text-align: center;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    border-top: 4px solid ${(props) => props.theme.primary};
    border-bottom: 4px solid ${(props) => props.theme.primary};
    transition: 0.2s all;

    &:link,
    &:visited,
    &:hover,
    &:active {
        text-decoration: none !important;
    }

    &:not(:disabled):hover {
        border-top: 4px solid ${(props) => props.theme.secondary};
        border-bottom: 4px solid ${(props) => props.theme.secondary};
    }

    &:disabled {
        background: ${(props) => lighten(0.2, grayscale(props.theme.primary))};
        border: 3px solid ${(props) => lighten(0.2, grayscale(props.theme.primary))};
    }
`;

const ButtonNode = styled.button`
    ${base}
`;

const StyledNavLink = styled(NavLink)`
    ${base}
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

interface LinkButtonProps extends NavLinkProps {
    label: string;
}

export function LinkButton({ label, ...rest }: LinkButtonProps) {
    return (
        <StyledNavLink {...rest}>
            <First>{label.substring(0, 1)}</First>
            {label.substring(1)}
        </StyledNavLink>
    );
}

export default function Button({ label, ...rest }: ButtonProps) {
    return (
        <ButtonNode {...rest}>
            <First>{label.substring(0, 1)}</First>
            {label.substring(1)}
        </ButtonNode>
    );
}
