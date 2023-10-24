import { CreditCard, Bank, Money } from '@phosphor-icons/react'
import { RadioContainer } from './styles'
import * as Radio from '@radix-ui/react-radio-group'
import { useFormContext, Controller } from 'react-hook-form'
import { FormErrorDescription } from '../../../../components/FormErrorDescription'
export default function RadioSelect() {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  return (
    <RadioContainer>
      <Controller
        name="payment"
        control={control}
        render={({ field }) => {
          return (
            <Radio.Root
              className="RadioGroupRoot"
              aria-label="View density "
              onValueChange={field.onChange}
              value={field.value}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Radio.Item
                  className="RadioGroupItem"
                  value="credit"
                  id="credit"
                >
                  <CreditCard size={16} color="#8047F8" />
                  <span>CRÉDITO</span>
                </Radio.Item>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Radio.Item className="RadioGroupItem" value="debit" id="debit">
                  <Bank size={16} color="#8047F8" />
                  <span>DÉDITO</span>
                </Radio.Item>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Radio.Item className="RadioGroupItem" value="money" id="money">
                  <Money size={16} color="#8047F8" />
                  <span>DINHEIRO</span>
                </Radio.Item>
              </div>
              {errors.payment && (
                <FormErrorDescription
                  message={String(errors.payment?.message)}
                />
              )}
            </Radio.Root>
          )
        }}
      />
    </RadioContainer>
  )
}
