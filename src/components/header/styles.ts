import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
padding: 2rem 10rem;
justify-content: space-between;
align-items: center;

> div {
  display: flex;
  gap:12px;
  > div {
    display: flex;
    gap: 4px;
    align-items: center;
    padding: 8px;
    background-color: ${props => props.theme["purple-light"]};
    border-radius: 6px;
    color: ${props => props.theme["purple"]};

    > span {
      font: ${props => props.theme["roboto-sm"]}
    }
  }
  > button {
    height: 38px;
    border: 0;
    background-color:  ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    border-radius: 6px;
    padding: 10px 8px;
    cursor: pointer;
  }

}
`