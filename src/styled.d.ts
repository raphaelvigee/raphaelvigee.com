import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        primary: string;
        secondary: string;
        grey: string;
        lightgrey: string;
    }
}
