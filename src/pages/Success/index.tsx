import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  SuccessContainer,
  OrderInfo,
  SuccessInfoContainer,
  SuccessImgContainer,
} from './styles'

export function Success() {
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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
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
                <span>Pagamento na entrega</span>
                <span>
                  <strong>Cartão de Crédito</strong>
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
