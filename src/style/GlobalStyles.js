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

    a {
        text-decoration: none;
        color: ${stylesConfig.colorDarkGrey};
        font-weight: 600;
    }

    ul {
        list-style: none;
    }

    .App {
        padding: 2rem;
	    height: 100vh;
    }


    .active-link {
        color: ${stylesConfig.colorPrimary};
    }

    
    /* Animations */
    @keyframes rotateSpinner {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;

export default GlobalStyles;
