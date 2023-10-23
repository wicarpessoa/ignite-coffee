import { ComponentProps } from 'react'
import styled from 'styled-components'

interface ButtonToCartContainerProps extends ComponentProps<'button'> {
  $cartLength: number
}

export const ButtonToCartContainer = styled.button<ButtonToCartContainerProps>`
  position: relative;
  height: 38px;
  border: 0;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 6px;
  padding: 10px 8px;
  cursor: pointer;

  &:before {
    display: ${(props) => (props.$cartLength ? 'flex' : 'none')};

    content: '${(props) => props.$cartLength}';
    color: ${(props) => props.theme.white};
    font: var(--roboto-xs);
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.theme['yellow-dark']};
    right: -10px;
    top: -10px;
  }
`
