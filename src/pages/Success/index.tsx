import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { SuccessContainer, OrderInfo, SuccessInfoContainer } from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <SuccessInfoContainer>
          <OrderInfo>
            <div>
              <MapPin />
              <div>
                <span>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>
          </OrderInfo>

          <OrderInfo>
            <div>
              <div>
                <Timer />
              </div>
              <div>
                <span>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>
          </OrderInfo>

          <OrderInfo>
            <div>
              <div>
                <CurrencyDollar />
              </div>
              <div>
                <span>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>
          </OrderInfo>
        </SuccessInfoContainer>
      </div>
    </SuccessContainer>
  )
}
