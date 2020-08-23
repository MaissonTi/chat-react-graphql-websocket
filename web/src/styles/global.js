import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import 'normalize.css';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    overflow: hidden;
  }
  body {
    background: linear-gradient(-180deg, ${colors.secondary.main}, ${colors.primary.main});
  }
  body, input, button {
    color: #000;
    font-size: 14px;
    font: 800 14px/1 'Roboto', 'Helvetica', 'Arial', sans-serif;

  }


  button {
    cursor: pointer;
  }

  /* input {
      background: rgba(0, 0, 0, 0.1) !important;
      border: 0 !important;
      border-radius: 4px !important;
      height: 44px !important;
      padding: 0 15px !important;
      color: #fff !important;
      margin: 0 0 10px !important;
      width: auto !important;;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7) !important;
      }
    } */

`;
