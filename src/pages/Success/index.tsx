import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  SuccessContainer,
  OrderInfo,
  SuccessInfoContainer,
  SuccessImgContainer,
} from './styles'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
export function Success() {
  const { order } = useContext(CartContext)
  const paymentMethodDescription = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de dédito',
    money: 'Dinheiro',
    stripe: 'Pagamento efetuado online',
  }
  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <div>
        <SuccessInfoContainer>
          <OrderInfo $color="purple">
            <div>
              <div>
                <MapPin color="#FAFAFA" weight="bold" />
              </div>
              <div>
                <span>
                  Entrega em{' '}
                  <strong>
                    {order.adress.street}, {order.adress.streetNumber}
                  </strong>
                </span>
                <span>
                  {order.adress.neighborhood} {order.adress.city},{' '}
                  {order.adress.state}
                </span>
              </div>
            </div>
          </OrderInfo>

          <OrderInfo $color="yellow">
            <div>
              <div>
                <Timer color="#FAFAFA" weight="bold" />
              </div>

              <div>
                <span>Previsão de entrega</span>
                <span>
                  <strong>20 min - 30 min </strong>
                </span>
              </div>
            </div>
          </OrderInfo>

          <OrderInfo $color="yellow-dark">
            <div>
              <div>
                <CurrencyDollar color="#FAFAFA" weight="bold" />
              </div>

              <div>
                <span>
                  {order.payment.paymentType === 'stripe'
                    ? 'Pagemento online'
                    : 'Pagamento na entrega'}
                </span>
                <span>
                  <strong>
                    {paymentMethodDescription[order.payment.paymentType]}
                  </strong>
                </span>
              </div>
            </div>
          </OrderInfo>
        </SuccessInfoContainer>
        <SuccessImgContainer>
          <img src="./src/assets/successImg.svg" alt="" />
        </SuccessImgContainer>
      </div>
    </SuccessContainer>
  )
}
