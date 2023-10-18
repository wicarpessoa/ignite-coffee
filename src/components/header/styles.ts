import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 2rem 0;
  align-items: center;
  > button:nth-of-type(1) {
    background-color: transparent;
    cursor: pointer;
  }
  > div {
    display: flex;
    gap: 12px;
    > button:nth-of-type(1) {
      display: flex;
      gap: 4px;
      align-items: center;
      padding: 8px;
      background-color: ${(props) => props.theme['purple-light']};
      border-radius: 6px;
      color: ${(props) => props.theme.purple};

      > span {
        font: var(--roboto-sm);
      }
    }
    > button {
      height: 38px;
      border: 0;
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      border-radius: 6px;
      padding: 10px 8px;
      cursor: pointer;
    }
  }
`
