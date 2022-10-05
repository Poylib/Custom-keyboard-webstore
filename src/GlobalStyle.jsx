import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none;
  }

  body {
    min-width:375px;
    background: white;
    color : black;
    font-family: 'Noto Sans KR', sans-serif;
  }  
`;

export default GlobalStyle;
