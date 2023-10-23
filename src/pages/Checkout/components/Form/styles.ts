import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > div {
    display: flex;
  }
  > label:nth-of-type(1) {
    width: 200px;
  }
  > div:nth-of-type(2) {
    display: flex;
    gap: 12px;
    label:nth-child(1) {
      width: 200px;
    }
    label:nth-child(2) {
      flex: 1;
    }
    label:nth-child(3) {
      width: 60px;
    }
  }
  > div:nth-of-type(1) {
    display: flex;
    gap: 12px;
    label:nth-child(1) {
      width: 200px;
    }
    label:nth-child(2) {
      flex: 1;
    }
  }

  input {
    background-color: ${(props) => props.theme['base-input']};
    font: var(--roboto-sm);
    color: ${(props) => props.theme['base-text']};
    border: none;
    padding: 12px;
    border-radius: 4px;
    width: 100%;
    &:placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
