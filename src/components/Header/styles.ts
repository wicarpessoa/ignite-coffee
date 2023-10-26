import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 2rem;
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
  }
  @media (max-width: 1168px) {
    padding: 2rem 1rem;
  }
  @media (max-width: 400px) {
    > div {
      > button:nth-of-type(1) {
        > span {
          display: none;
        }
      }
    }
  }
`
