import { CreditCard, Bank, Money } from '@phosphor-icons/react'
import { RadioContainer } from './styles'
import * as Radio from '@radix-ui/react-radio-group'
export default function RadioSelect() {
  return (
    <RadioContainer>
      <Radio.Root className="RadioGroupRoot" aria-label="View density">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Radio.Item className="RadioGroupItem" value="default" id="r1">
            <CreditCard size={16} color="#8047F8" />
            <span>CARTÃO DE CRÉDITO</span>
          </Radio.Item>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Radio.Item className="RadioGroupItem" value="comfortable" id="r2">
            <Bank size={16} color="#8047F8" />
            <span>CARTÃO DE DÉDITO</span>
          </Radio.Item>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Radio.Item className="RadioGroupItem" value="compact" id="r3">
            <Money size={16} color="#8047F8" />
            <span>DINHEIRO</span>
          </Radio.Item>
        </div>
      </Radio.Root>
    </RadioContainer>
  )
}
