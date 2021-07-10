import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --principal-color: #2570ff;
    --banner-font-color: #fff;
    --main-color: #2570ff;
    --color-dark: #1d2231;
    --text-grey: #8390a2;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
  }
  body, input, button {
    font-size: 14px ;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  } 

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
