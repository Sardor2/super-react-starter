import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
  }
  body {
    height: 100%;
    width: 100%;
  }
  a {
    text-decoration: none;
  }
  
`;
