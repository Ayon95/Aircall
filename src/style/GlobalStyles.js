import { createGlobalStyle } from 'styled-components';
import stylesConfig from './stylesConfig';

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        font-family: 'Nunito Sans', Helvetica, sans-serif;
        font-size: 1.6rem;
        background-color: #171726;
    }

    .App {
        padding: 2rem;
	    height: 100vh;
    }

    a {
        text-decoration: none;
        color: #525252;
        font-weight: 600;
    }

    .active-link {
        color: ${stylesConfig.colorPrimary};
    }
`;

export default GlobalStyles;
