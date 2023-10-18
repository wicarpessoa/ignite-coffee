import styled from 'styled-components'

export const CounterContainer = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 8px;
  height: 38px;
  justify-content: center;
  > button {
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
    width: 20px;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
  > span {
    font: var(--roboto-md);
    font-weight: 400;
  }
`
