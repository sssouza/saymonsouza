import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
    height: 100vh;

    p, h1, h2, h3, h4, h5 {
      margin: 0;
    }
  }
`;

export default GlobalStyle;
