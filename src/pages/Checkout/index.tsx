import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import {
  CheckoutAdressContainer,
  CheckoutCartContainer,
  CheckoutContainer,
  CheckoutPaymentContainer,
} from './styles'
import Image1 from '../../assets/Image-1.png'
import RadioSelect from './components/RadioSelect'
import Form from './components/Form'
export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <CheckoutAdressContainer>
          <div>
            <MapPinLine size={22} color="#C47F17" />
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <Form />
        </CheckoutAdressContainer>
        <CheckoutPaymentContainer>
          <div>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <RadioSelect />
        </CheckoutPaymentContainer>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <CheckoutCartContainer>
          <div>
            <img src={Image1} alt="" />
            <div>
              <span>Expresso Tradicional</span>
              <div>
                <button></button>
                <button></button>
              </div>
            </div>
            <span>RS 9,90</span>
          </div>
        </CheckoutCartContainer>
      </div>
    </CheckoutContainer>
  )
}
