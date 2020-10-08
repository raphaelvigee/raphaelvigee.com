import styled, { css } from 'styled-components';
import { Fonts } from '../../styled';

const base = css`
    ${Fonts.Roboto};
    border: 3px solid ${(props) => props.theme.primary};
    font-weight: normal;
    padding: 0.2em;
    display: block;
    color: ${(props) => props.theme.grey};
    width: 100%;
    outline: none;
    font-size: 1.5em;
    margin-bottom: 1em;
    transition: 0.3s all;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus {
        border: 3px solid ${(props) => props.theme.secondary};
    }

    &::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: lightgrey;
        opacity: 1; /* Firefox */
    }
`;

export const InputText = styled.input.attrs({
    type: 'text',
})`
    ${base}
`;

export const InputTextArea = styled.textarea.attrs({
    rows: 8,
})`
    ${base};
    resize: none;
`;
