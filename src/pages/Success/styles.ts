import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
`

export const SuccessInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
  }
`

export const SuccessInfo = styled.div`
  display: flex;
  padding: 2.5rem;
  > div {
    display: flex;
    > div {
      display: flex;
      flex-direction: column;
    }
  }
`
