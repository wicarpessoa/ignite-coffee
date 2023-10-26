import styled from 'styled-components'

export const FormErrorDescriptionContainer = styled.span`
  display: block;
  font: (--roboto-xs);
  color: ${(props) => props.theme.red};
  font-size: 0.75rem;
  margin-top: 0.25rem;
`
