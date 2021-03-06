import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'NanumSquare', sans-serif !important;
    font-display: 'block';
    box-sizing : border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size : 10px;
  }
  
  body {
    margin: 0;
  }

  button {
    cursor: pointer;
  }
  
  ul {
    list-style-type: none;
    padding : 0;
  }
`;

export default GlobalStyle;
