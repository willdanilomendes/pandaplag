import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *, input, button{
    font-family: 'Montserrat', sans-serif;
  }

  html,
  body,
  button {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

.container {
  max-width: 1280px;
}

h1 {
  font-size: 3.157rem;
  font-family: 'Montserrat', sans-serif;
}

h2 {
  font-size: 2.369rem;
  font-family: 'Montserrat', sans-serif;
}

h3 {
  font-size: 1.777rem;
  font-family: 'Montserrat', sans-serif;
}

h4 {
  font-size: 1.333rem;
  font-family: 'Montserrat', sans-serif;
}

p,
span {
  font-size: 14px;
  font-family: 'Source Sans Pro', sans-serif;
}
`;
