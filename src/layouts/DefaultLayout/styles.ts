import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 0 auto;
  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  /* ::-webkit-scrollbar-button:;
  ::-webkit-scrollbar-thumb:;
  ::-webkit-scrollbar-track:;
  ::-webkit-scrollbar-track-piece:;
  ::-webkit-scrollbar-corner:;
  ::-webkit-resizer:; */
`
