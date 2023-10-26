import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 1184px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem 10rem;
  @media (max-width: 1168px) {
    padding: 0 1rem 10rem;
  }
`
export const HeroContainer = styled.section`
  display: flex;
  width: 100%;
  min-height: calc(100dvh - 108px);
  justify-content: space-between;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('https://raw.githubusercontent.com/wicarpessoa/ignite-coffee/04499731127a544e0b67e6b211270515b342c926/src/assets/Background.svg');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
    pointer-events: none;
  }
`
export const HeroContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    max-width: 588px;
    > h1 {
      font: var(--baloo2-xl);
      color: ${(props) => props.theme['base-title']};
      margin-bottom: 1rem;
    }
    > p {
      font: var(--roboto-l);
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 4rem;
    }
    > ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-top: auto;
      gap: 1.25rem 2rem;
      > li:first-child div {
        background-color: ${(props) => props.theme['yellow-dark']};
      }
      > li:nth-child(2) div {
        background-color: ${(props) => props.theme['base-text']};
      }
      > li:nth-child(3) div {
        background-color: ${(props) => props.theme.yellow};
      }
      > li:nth-child(4) div {
        background-color: ${(props) => props.theme.purple};
      }
      > li {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 12px;
        white-space: nowrap;
        > div {
          height: 2rem;
          width: 2rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${(props) => props.theme['base-background']};
        }
      }
    }
  }
  > div:nth-of-type(2) {
    img {
      height: clamp(14rem, 6.571rem + 17.143vw, 22rem);
    }
  }
  @media (max-width: 1168px) {
    flex-direction: column-reverse;
    align-items: center;
    > div {
      > h1 {
        text-align: center;
      }
      > p {
        text-align: center;
      }
      > ul {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`
export const CoffeesContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  gap: 3.5rem;
  > h1 {
    font: var(--baloo2-l);
    color: ${(props) => props.theme['base-subtitle']};
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`
