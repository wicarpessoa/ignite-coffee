import { CurrencyDollar, MapPinLine, Trash } from '@phosphor-icons/react'
import {
  CheckoutAdressContainer,
  CheckoutCardInfoContainer,
  CheckoutCartContainer,
  CheckoutContainer,
  CheckoutInfoContainer,
  CheckoutPaymentContainer,
} from './styles'
import RadioSelect from './components/RadioSelect'
import { AdressForm } from './components/Form'
import { Counter } from '../../components/Counter'
import { CartContext } from '../../context/CartContext'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect } from 'react'
import { numberToCurrency } from '../../utils/numberToCurrency'
import { FormProvider, useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'

const adressApiSchemaResponse = zod.object({
  state: zod.string().min(1).max(2),
  street: zod.string().min(1),
  city: zod.string().min(1),
  neighborhood: zod.string().min(1),
})
type adressApiSchemaResponseType = zod.infer<typeof adressApiSchemaResponse>

const checkoutValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, 'O cep tem que ter 8 dígitos.')
    .max(8, 'O cep tem que ter 8 dígitos.'),
  street: zod.string().min(1, 'Preencha o nome da rua.'),
  streetNumber: zod.string().min(1, 'Preencha o número do endereço.'),
  neighborhood: zod.string().min(1, 'Preencha o nome do Bairro.'),
  complement: zod.string(),
  payment: zod.enum(['debit', 'credit', 'money']),
  city: zod.string().min(1, 'Preencha a cidade.'),
  state: zod.string().min(2, 'Preencha o estado.'),
})

type checkoutFormData = zod.infer<typeof checkoutValidationSchema>
export function Checkout() {
  const {
    cart,
    increaseCartItemAmount,
    decreaseCartItemAmount,
    removeCartItem,
    // addCheckoutItemFinished,
  } = useContext(CartContext)

  const checkoutForm = useForm<checkoutFormData>({
    mode: 'onBlur',
    resolver: zodResolver(checkoutValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      neighborhood: '',
      streetNumber: '',
      complement: '',
      city: '',
      state: '',
    },
  })

  const { handleSubmit, reset, setValue, watch, setError } = checkoutForm

  const totalCartPrice = cart.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.quantity
  }, 0)

  const deliveryTax = 3.5
  function finishCheckoutCart() {
    // addCheckoutItemFinished()
    reset()
  }

  const cep = watch('cep')
  useEffect(() => {
    const regexWithoutDash = /^\d{8}$/
    const regexWithDash = /^\d{5}-\d{3}$/

    if (regexWithoutDash.test(cep) || regexWithDash.test(cep)) {
      axios
        .get(`https://brasilapi.com.br/api/cep/v1/${cep}`, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((res) => {
          const address: adressApiSchemaResponseType = res.data
          if (address) {
            for (const key in address) {
              setValue(
                key as keyof checkoutFormData,
                address[key as keyof typeof address],
              )
            }
          }
        })
        .catch(() =>
          setError('cep', { type: 'custom', message: 'CEP inválido!' }),
        )
    }
  }, [setValue, cep, setError])

  return (
    <CheckoutContainer onSubmit={handleSubmit(finishCheckoutCart)}>
      <div>
        <h2>Complete seu pedido</h2>
        <FormProvider {...checkoutForm}>
          <CheckoutAdressContainer>
            <div>
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <h2>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <AdressForm />
          </CheckoutAdressContainer>
          <CheckoutPaymentContainer>
            <div>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <h2>Pagamento</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <RadioSelect />
          </CheckoutPaymentContainer>
        </FormProvider>
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
                  <img src={cartItem.imgUrl} alt="" />
                  <div>
                    <span>{cartItem.title}</span>
                    <div>
                      <Counter
                        count={cartItem.quantity}
                        onHandleAddCounter={() => {
                          increaseCartItemAmount(cartItem.id)
                        }}
                        onHandleSubCounter={() => {
                          decreaseCartItemAmount(cartItem.id)
                        }}
                      />
                      <button
                        onClick={() => {
                          removeCartItem(cartItem.id)
                          toast.success(
                            `Item ${cartItem.title} removido com sucesso!`,
                          )
                        }}
                      >
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
              <span>{numberToCurrency(totalCartPrice)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>{numberToCurrency(deliveryTax)}</span>
            </div>
            <div>
              <span>Total</span>
              <span>{numberToCurrency(totalCartPrice + deliveryTax)}</span>
            </div>
            <button type="submit">CONFIRMAR PEDIDO</button>
          </CheckoutInfoContainer>
        </CheckoutCartContainer>
      </div>
    </CheckoutContainer>
  )
}
