import { ComponentProps } from 'react'
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
  > div:nth-of-type(2) {
    display: flex;
    gap: 12px;
    > label:nth-child(1) {
      width: 200px;
    }
    > div {
      display: flex;
      gap: 12px;
      flex: 1;
      label:nth-child(1) {
        flex: 1;
      }
      label:nth-child(2) {
        width: 60px;
      }
    }
  }

  input {
  }
  @media (max-width: 768px) {
    > label {
      width: 100%;
    }
    > label:nth-of-type(1) {
      width: 50%;
    }
    > div {
      flex-direction: column;
      > label {
        width: 100%;
      }
    }
    > div:nth-of-type(1) {
      label:nth-child(1) {
        width: 50%;
      }
    }
    > div:nth-of-type(2) {
      display: flex;
      gap: 12px;
      label:nth-child(1) {
        width: 100%;
      }
    }
  }
`
interface InputProps extends ComponentProps<'input'> {
  $error: boolean
}

export const Input = styled.input<InputProps>`
  background-color: ${(props) => props.theme['base-input']};
  font: var(--roboto-sm);
  color: ${(props) => props.theme['base-text']};
  border: none;
  padding: 12px;
  border-radius: 4px;
  width: 100%;
  box-shadow: 0 0 0 2px
    ${({ theme, $error }) => ($error ? theme.red : theme['base-card'])};

  &:placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
