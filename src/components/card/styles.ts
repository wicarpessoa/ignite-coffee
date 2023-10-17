import styled from "styled-components";

export const CardContainer = styled.div`

background-color: ${(props) => props.theme['base-card']};
width: 16rem;
height: 310px;
display: flex;
flex-direction: column;
align-items: center;
padding: 0 1.250rem 1.250rem;
border-radius: 6px 36px 6px 36px;

`

export const TextCardContainer = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
  > p {
  font:${(props) => props.theme["roboto-sm"]} ;
  color:${(props) => props.theme["base-label"]} ;
  text-align: center;
  }
  > span {
  font:${(props) => props.theme["baloo2-sm"]} ;
  color:${(props) => props.theme["base-subtitle"]} ;
  margin-bottom: 0.5rem;
  }
`

export const ImgContainer = styled.div`
  display: flex;
  height: fit-content;
  margin-bottom: 0.750rem;
> img {
  height: 120px;
  object-fit: cover;
}
`
export const TagsContainer = styled.div`
display:flex;
flex-wrap: wrap;
gap: 4px;
margin-bottom: 1rem;;
`
export const CounterContainer = styled.div`
background-color: ${(props) => props.theme['base-button']};
border-radius: 6px;
display: flex;
gap: 4px;
align-items: center;
padding: 8px;
height: 38px;
justify-content: center;
> button{
  border: 0;
  background-color: transparent;
  color:  ${(props) => props.theme['purple']};
  cursor: pointer;
  width: 20px;
}
> span {
  font:${(props) => props.theme["roboto-md"]} ;
  font-weight: 400;
}
`

export const ControllerContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
gap: 24px;
margin-top: auto;
> div {
  display: flex;
  gap: 8px;
  > button {
    height: 38px;
    border: 0;
    background-color:  ${(props) => props.theme["purple-dark"]};
    color: ${(props) => props.theme.white};
    border-radius: 6px;
    padding: 10px 8px;
    cursor: pointer;
  }
}
> span {
font:${(props) => props.theme["baloo2-md"]} ;
color: ${(props) => props.theme["base-text"]};
&::before {
  content: 'R$ ';
  font:${(props) => props.theme["roboto-sm"]} ;
}
}
`