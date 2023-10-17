import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import { CheckoutAdressContainer, CheckoutCartContainer, CheckoutContainer, CheckoutPaymentContainer, RadioContainer } from "./styles";
import Image1 from '../../assets/Image-1.png'
import * as Radio from "@radix-ui/react-radio-group";
export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <CheckoutAdressContainer>
          <div>
          <MapPinLine size={22} color="#C47F17"/>
          <div>
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
          </div>
          <input type="text" name="" id="" placeholder="CEP"/>
          <input type="text" placeholder="Rua"/>
          <div><input type="text" name="" id="" placeholder="Número" /><input type="text" placeholder="Complemento" /></div>
          <div><input type="text" placeholder="Bairro"/><input type="text" placeholder="Cidade"/><input type="text" placeholder="UF" /></div>
        </CheckoutAdressContainer>
        <CheckoutPaymentContainer>
          <div>
            <CurrencyDollar size={22} color='#8047F8'/>
            <div>
            <h2>Pagamento</h2>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
          </div>
          <RadioContainer>
          <Radio.Root className="RadioGroupRoot" defaultValue="default" aria-label="View density">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Radio.Item className="RadioGroupItem" value="default" id="r1">
        <span>Dinheiro</span>

          <Radio.Indicator className="RadioGroupIndicator" />
        </Radio.Item>
        
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Radio.Item className="RadioGroupItem" value="comfortable" id="r2">
        <span>Crédito</span>

          <Radio.Indicator className="RadioGroupIndicator" />
        </Radio.Item>
      
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Radio.Item className="RadioGroupItem" value="compact" id="r3">
          <span>Debito</span>
          <Radio.Indicator className="RadioGroupIndicator" />
        </Radio.Item>
       
      </div>
    </Radio.Root>
    </RadioContainer>
        </CheckoutPaymentContainer>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <CheckoutCartContainer>
          <div>
            <img src={Image1} alt="" />
            <div>
              <span>Expresso Tradicional11111</span>
              <div><button></button><button></button></div>
            </div>
              <span>RS 9,90</span>
          </div>
        </CheckoutCartContainer>
      </div>
    </CheckoutContainer>
  )
}
