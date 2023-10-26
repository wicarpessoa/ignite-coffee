import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  width: 16rem;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem 1.25rem;
  border-radius: 6px 36px 6px 36px;
  @media (max-width: 400px) {
    flex-direction: row;
    width: 100%;
    height: fit-content;
    padding: 1.25rem;
    gap: 0.5rem;
  }
`

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
  @media (max-width: 400px) {
    flex-direction: row;
    margin-top: 0;
    gap: 0.5rem;
  }
`
export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > p {
    font: var(--roboto-sm);
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
  > span {
    font: var(--baloo2-sm);
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }
  @media (max-width: 400px) {
    margin-top: 0;
    flex-direction: column-reverse;
    > p {
      display: none;
    }
    > span {
      text-align: center;
    }
  }
`

export const ImgContainer = styled.div`
  display: flex;
  height: fit-content;
  margin-bottom: 0.75rem;
  > img {
    height: clamp(6rem, 0.286rem + 8.571vw, 8rem);
    object-fit: cover;
  }
  @media (max-width: 400px) {
    display: none;
  }
`
export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 1rem;
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
      background-color: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme.white};
      border-radius: 6px;
      padding: 10px 8px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: ${(props) => props.theme.purple};
      }
    }
  }
  > span {
    font: var(--baloo2-md);
    color: ${(props) => props.theme['base-text']};
    white-space: nowrap;
    &::before {
      content: 'R$ ';
      font: var(--roboto-sm);
    }
  }
  @media (max-width: 400px) {
    flex-direction: column;
    margin-top: 0;
  }
`
