import styled from 'styled-components'

export const RadioContainer = styled.div`
  .RadioGroupRoot {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
  }

  .RadioGroupItem {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};
    padding: 1rem;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme['base-button']};
    transition: all 0.2s ease-in-out;
    white-space: nowrap;
    > span {
      font: ${(props) => props.theme['button-m']};
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
    }

    &[data-state='checked'] {
      background-color: ${(props) => props.theme['purple-light']};

      border: 1px solid ${(props) => props.theme.purple};
      border-radius: 4px;
    }
  }
  .RadioGroupItem:not([data-state='checked']):hover {
    background-color: ${(props) => props.theme['base-hover']};
    border: 1px solid ${(props) => props.theme['base-hover']};
  }
  .RadioGroupItem:focus {
  }

  .RadioGroupIndicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: blue;
    color: blue;
  }
`
