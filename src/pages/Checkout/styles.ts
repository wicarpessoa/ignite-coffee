import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  margin: 0 auto;
  width: 100%;
  gap: 2.5rem;
  > div {
    > h2 {
      font: var(--baloo2-xs);
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
  > div:nth-of-type(2) {
    flex: 1;
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
      font: var(--roboto-md);
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
      font: var(--roboto-md);
      font-weight: 400;
      color: #403937;
    }
    p {
      color: ${(props) => props.theme['base-text']};
      font: var(--roboto-sm);
    }
  }
`

export const CheckoutCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 36rem;
  margin-top: 1rem;
  padding: 1.5rem 2.5rem 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  > div:nth-of-type(1),
  > div:nth-of-type(2) {
  }
`

export const CheckoutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  > div:nth-of-type(1),
  > div:nth-of-type(2) {
    > span {
      font: var(--roboto-sm);
      color: ${(props) => props.theme['base-text']};
    }
  }
  > div:nth-of-type(3) {
    > span {
      font: var(--roboto-l);
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
  > button {
    margin-top: 12px;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 12px 0;
    background-color: ${(props) => props.theme.yellow};
    border-radius: 6px;
    font: var(--button-g);
    color: ${(props) => props.theme.white};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const CheckoutCardInfoContainer = styled.div`
  display: flex;
  padding: 1.5rem 0 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
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
    margin-right: 22px;
    gap: 8px;
    > div:nth-of-type(1) {
      display: flex;
      gap: 8px;
      > button:nth-of-type(1) {
        display: flex;
        padding: 8px;
        align-items: center;
        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;

        font: var(--button-m);
        font-weight: 400;
        gap: 4px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
          background: ${(props) => props.theme['base-hover']};
        }
      }
    }
    > span {
      font: var(--roboto-md);
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};

      white-space: nowrap;
    }
  }
  > span {
    font: var(--roboto-md);
    color: ${(props) => props.theme['base-text']};

    white-space: nowrap;
  }
`
