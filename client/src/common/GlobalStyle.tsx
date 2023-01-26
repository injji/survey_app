import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'
import './font.scss'

const GlobalStyle = createGlobalStyle`
${reset};

html {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; 
}

body {
    max-width: 500px;
    background:#ECF1F5;
}

button {
    border:none;
}
`;

export default GlobalStyle;