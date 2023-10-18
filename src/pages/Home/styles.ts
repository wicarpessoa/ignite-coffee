import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 1184px;
  width: 100%;
  margin: 0 auto;
  padding: 6rem 0 10rem;
`

export const HeroContainer = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: space-between;
  margin-bottom: 9rem;
  > div {
    display: flex;
    flex-direction: column;
    max-width: 588px;
    > h1 {
      font: ${(props) => props.theme['baloo2-xl']};
      color: ${(props) => props.theme['base-title']};
      margin-bottom: 1rem;
    }
    > p {
      font: ${(props) => props.theme['roboto-l']};
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
    }
    > ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      flex-wrap: wrap;
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
`
export const CoffeesContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3.5rem;
  > h1 {
    font: ${(props) => props.theme['baloo2-l']};
    color: ${(props) => props.theme['base-subtitle']};
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`
