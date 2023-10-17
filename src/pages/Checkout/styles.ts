import styled from "styled-components";

export const CheckoutContainer = styled.div`
display: flex;
margin: 0 auto;
max-width: 1184px;
padding: 2rem;
> div {
  > h2 {
    font: ${props=> props.theme["baloo2-xs"]};
    color: ${props=> props.theme["base-subtitle"]}

  }
}
input {
  background-color: ${props=> props.theme["base-input"]};
  border: none;
  padding: 12px;
  border-radius: 4px;
  width: 100%;
}
`
export const CheckoutCartContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
max-width: 36rem;
padding: 2.5rem;
background: ${props=> props.theme["base-card"]};
border-radius: 6px 44px 6px 44px;
> div {
  padding-bottom: 2rem;
    border-bottom: 1px solid ${props => props.theme["base-button"]};
  display: flex;
  > img {
    height: 4rem;
    width: auto;
    object-fit: cover;
    margin-right: 1.250rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right:3.125rem;
    >span {
      white-space: nowrap;
    }
  }
}
`

export const CheckoutAdressContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${props=> props.theme["base-card"]};
  border-radius: 6px;

  > div {
    display: flex;
    gap: 8px;
    h2 {
    font: ${props=> props.theme["roboto-md"]};
    font-weight:400 ;
    color: ${props=> props.theme["base-subtitle"]}

    }
    p {
    color: ${props=> props.theme["base-text"]}

    }
  }
`

export const CheckoutPaymentContainer = styled.div`
display: flex;
flex-direction: column;
padding: 2.5rem;
background: ${props=> props.theme["base-card"]};
border-radius: 6px;
> div {
    display: flex;
    gap: 8px;
    h2 {
    font: ${props=> props.theme["roboto-md"]};
    font-weight:400 ;
    color: #403937;

    }
    p {
    color: ${props=> props.theme["base-text"]};
    font: ${props=> props.theme["roboto-sm"]};

    }
  }
`

export const RadioContainer = styled.div`
.RadioGroupRoot {
  display: flex;
  gap: 0.750rem;
}


.RadioGroupItem {
  border-radius: 6px;
  background-color: ${props => props.theme["base-button"]};
  padding: 12px;
  cursor: pointer;
  &[data-state="checked"] {
    border: 2px solid #de350b;
    border-radius: 4px;
  }
}
.RadioGroupItem:hover {
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