import { ComponentProps } from 'react'
import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.75rem;
  }
  > h2 {
    font: var(--baloo2-l);
    color: ${(props) => props.theme['yellow-dark']};
  }
  > span {
    font: var(--roboto-l);
    font-weight: 400;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
    flex-direction: column;
    > div {
      flex-direction: column;
      gap: 1rem;
    }
  }
`

export const SuccessInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme['base-background']};
  &:before {
    border-radius: 7px 37px 7px 37px;
    position: absolute;
    z-index: -1;
    content: '';
    inset: -2px;
    background: linear-gradient(
      90deg,
      rgba(219, 172, 44, 1) 0%,
      rgba(128, 71, 248, 1) 100%
    );
  }
  > div {
    display: flex;
  }
  @media (max-width: 1168px) {
    padding: 1rem;
  }
`

interface OrderInfoProps extends ComponentProps<'div'> {
  $color: 'purple' | 'yellow' | 'yellow-dark'
}

export const OrderInfo = styled.div<OrderInfoProps>`
  display: flex;
  > div {
    display: flex;
    align-items: center;
    gap: 12px;
    > div {
      display: flex;
      flex-direction: column;
      > span {
        color: ${(props) => props.theme['base-text']};
      }
    }
    > div:nth-of-type(1) {
      width: 2rem;
      height: 2rem;
      border-radius: 9999px;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme[props.$color]};
      color: ${(props) => props.theme.white};
    }
  }
`

export const SuccessImgContainer = styled.div`
  display: flex;
  > img {
    height: clamp(12rem, 1.385rem + 18.462vw, 18rem);
  }
`
