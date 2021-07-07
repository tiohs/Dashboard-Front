import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --principal-color: #2570ff;
    --banner-font-color: #fff;
    --main-color: #2570ff;
    --color-dark: #1d2231;
    --text-grey: #8390A2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: sans-serif;
  }
  body {
     background: #fff;
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  } 

  button {
    cursor: pointer;
  }
`;
