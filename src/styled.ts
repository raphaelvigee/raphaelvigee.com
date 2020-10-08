import { createGlobalStyle, css } from 'styled-components';
import './assets/fonts/LemonMilk/stylesheet.scss';
import './assets/fonts/Roboto/stylesheet.scss';
import './assets/fonts/Icomoon/style.scss';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}`;

const size = {
    tablet: '768px',
    desktop: '1024px',
};

export const Devices = {
    ltTablet: `(max-width: ${size.tablet})`,
    gtDesktop: `(min-width: ${size.desktop})`,
};

export const Fonts = {
    LemonMilk: css`
        font-family: 'Lemon/Milk';
        font-weight: bold;
    `,
    RobotoLt: css`
        font-family: 'Roboto Lt';
    `,
    Roboto: css`
        font-family: 'Roboto';
        font-weight: bold;
    `,
};
