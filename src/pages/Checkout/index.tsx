import { CurrencyDollar, MapPinLine, Trash } from '@phosphor-icons/react'
import {
  CheckoutAdressContainer,
  CheckoutCardInfoContainer,
  CheckoutCartContainer,
  CheckoutContainer,
  CheckoutInfoContainer,
  CheckoutPaymentContainer,
} from './styles'
import Image1 from '../../assets/Image-1.png'
import RadioSelect from './components/RadioSelect'
import Form from './components/Form'
import { Counter } from '../../components/Counter'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { numberToCurrency } from '../../utils/numberToCurrency'

export function Checkout() {
  const { cart, addCountOnItemCart, subCountOnItemCart } =
    useContext(CartContext)
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
          {cart &&
            cart.map((cartItem) => {
              const FormattedToCurrency = numberToCurrency(
                cartItem.price * cartItem.quantity,
              )
              return (
                <CheckoutCardInfoContainer key={cartItem.id}>
                  <img src={Image1} alt="" />
                  <div>
                    <span>{cartItem.title}</span>
                    <div>
                      <Counter
                        count={cartItem.quantity}
                        onHandleAddCounter={() => {
                          addCountOnItemCart(cartItem.id)
                        }}
                        onHandleSubCounter={() => {
                          subCountOnItemCart(cartItem.id)
                        }}
                      />
                      <button>
                        <Trash color="#8047F8" size={16} /> REMOVER
                      </button>
                    </div>
                  </div>
                  <span>{FormattedToCurrency}</span>
                </CheckoutCardInfoContainer>
              )
            })}

          <CheckoutInfoContainer>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
            <button>CONFIRMAR PEDIDO</button>
          </CheckoutInfoContainer>
        </CheckoutCartContainer>
      </div>
    </CheckoutContainer>
  )
}
