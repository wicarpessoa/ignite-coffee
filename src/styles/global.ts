import { createGlobalStyle } from 'styled-components'
import { variables } from './variables'

export const GlobalStyle = createGlobalStyle`
${variables};

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${(props) => props.theme['base-background']};
  min-height: 100dvh;
  --webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
input {
  outline: none;
}
button {
  border: none;
}
`
