import styled from "styled-components";

export const TagContainer = styled.div`

background-color: ${props => props.theme["yellow-light"]};
padding: 4px 8px;
border-radius: 9999px;
display: flex;
align-items: center;
justify-content: center;
>span {
  font: ${props => props.theme.tag};
color: ${props => props.theme["yellow-dark"]};
align-self: center;
}
`