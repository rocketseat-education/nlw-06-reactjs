import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #f5f5f5;
    font-size: 14px;
    color: #333;
    font-family: sans-serif;
  }
`;