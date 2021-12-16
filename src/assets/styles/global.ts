import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #011627;
        --lines: #FFCB05;

        --text: #f0f2f5;

        --player-one: #33cc95;
        --player-two: #e52e4d;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;  //15px (16px * 0.9375 = 15)
        }
        @media(max-width: 720px) {
            font-size: 87.5%;   //14px
        }
    }

    body {
        background: var(--background);
        color: var(--text);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    
`