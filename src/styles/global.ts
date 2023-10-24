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
input,button {
  outline: none;
  border: none;
}
:focus-visible {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme.yellow};
}
@media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`
