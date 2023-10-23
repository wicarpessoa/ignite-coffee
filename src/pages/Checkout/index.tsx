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
import { AdressForm } from './components/Form'
import { Counter } from '../../components/Counter'
import { CartContext } from '../../context/CartContext'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { numberToCurrency } from '../../utils/numberToCurrency'
import { FormProvider, useForm } from 'react-hook-form'

const checkoutValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, 'O cep tem que ter 8 dígitos.')
    .max(8, 'O cep tem que ter 8 dígitos.'),
  street: zod.string().min(1, 'Preencha o nome da rua.'),
  neighborhood: zod.string().min(1, 'Preencha o nome do Bairro.'),
  number: zod.string().min(1, 'Preencha o número do endereço.'),
  complement: zod.string(),
  payment: zod.enum(['debit', 'credit', 'money']),
  city: zod.string().min(1, 'Preencha a cidade'),
  uf: zod.string().min(2, 'preencha o estado'),
})
type checkoutFormData = zod.infer<typeof checkoutValidationSchema>
export function Checkout() {
  const { cart, addCountOnItemCart, subCountOnItemCart, removeCartItem } =
    useContext(CartContext)
  const checkoutForm = useForm<checkoutFormData>({
    mode: 'onBlur',
    resolver: zodResolver(checkoutValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      neighborhood: '',
      number: '',
      complement: '',
      city: '',
      uf: '',
    },
  })
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = checkoutForm
  function finishCheckoutCart() {
    console.log(errors)
    reset()
  }
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
                      <button
                        onClick={() => {
                          removeCartItem(cartItem.id)
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
            <button type="submit">CONFIRMAR PEDIDO</button>
          </CheckoutInfoContainer>
        </CheckoutCartContainer>
      </div>
    </CheckoutContainer>
  )
}
