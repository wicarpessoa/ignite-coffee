import styled from "styled-components";

export const HomeContainer = styled.div`

`

export const HeroContainer = styled.section`
display: flex;
width: 100%;
justify-content: space-between;
max-width: 1120px;
margin: 0 auto;
gap: 3.5rem;
>div{

  > h1 {
  font: ${props => props.theme["baloo2-l"]};
  color: ${props => props.theme["base-title"]};
  }
  >p {
  font: ${props => props.theme["roboto-l"]};
  font-weight: 400;
  color: ${props => props.theme["base-subtitle"]};
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-self: flex-end;
    > li {
      list-style: none;
      display: flex;
      align-items: center;
      flex:1;
      gap: 12px;
      white-space: nowrap;
      > div {
        background-color: ${props => props.theme.purple};
        height: 2rem;
        width: 2rem;
        border-radius: 9999px;
         display: flex;
         align-items: center;
         justify-content: center;
      }
    }
  }
}
`