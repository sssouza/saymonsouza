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

    h1 {
      font-size: 28px;
      line-height: 39px;
    }

    h2 {
      font-size: 43px;
      line-height: 53px;
    }

    h3 {
      font-size: 29px;
      line-height: 39px;
    }
  }
`;

export default GlobalStyle;
