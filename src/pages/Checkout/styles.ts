import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1184px;
  gap: 2rem;
  padding: 2rem;
  > div {
    > h2 {
      font: ${(props) => props.theme['baloo2-xs']};
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
export const CheckoutCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 36rem;
  margin-top: 1rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  > div {
    padding-bottom: 2rem;
    border-bottom: 1px solid ${(props) => props.theme['base-button']};
    display: flex;
    > img {
      height: 4rem;
      width: auto;
      object-fit: cover;
      margin-right: 1.25rem;
    }
    > div {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-right: 3.125rem;
      > span {
        white-space: nowrap;
      }
    }
    > span {
      white-space: nowrap;
    }
  }
`

export const CheckoutAdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  margin-top: 1rem;
  > div {
    display: flex;
    gap: 8px;
    margin-bottom: 2rem;
    h2 {
      font: ${(props) => props.theme['roboto-md']};
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
    }
    p {
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const CheckoutPaymentContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding: 2.5rem;
  margin-top: 12px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  > div {
    display: flex;
    gap: 8px;
    h2 {
      font: ${(props) => props.theme['roboto-md']};
      font-weight: 400;
      color: #403937;
    }
    p {
      color: ${(props) => props.theme['base-text']};
      font: ${(props) => props.theme['roboto-sm']};
    }
  }
`
