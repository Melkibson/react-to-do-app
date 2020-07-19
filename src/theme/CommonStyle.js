import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body, html, *
    {
        padding: 0px;
        margin: 0px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body, html {
        width: 100%;
        height: 100%;
    }
    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    h1, h2, h3, h4, h5, h6, i
    {
        font-weight: normal;
        font-style: normal;
    }

    ul li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    body {
        margin: auto;
        background: linear-gradient(180deg, rgba(255,126,152,1) 35%, rgba(255,235,138,1) 100%););
    }
`;

export default GlobalStyle;