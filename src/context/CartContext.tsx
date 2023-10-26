import { ReactNode, createContext, useEffect, useReducer } from 'react'
import {
  CartItemProps,
  OrderProps,
  cartReducer,
} from '../reducers/cart/reducer'
import {
  addCartItemAction,
  increaseCartItemAmountAction,
  removeCartItemAction,
  decreaseCartItemAmountAction,
  addCheckoutItemFinishedAction,
  cleanCartAction,
} from '../reducers/cart/actions'

interface CreateCartItem {
  id: string
  priceId: string
  imgUrl: string
  title: string
  description: string
  price: number
  type: string[]
  quantity: number
}

interface CreateAdressProps {
  cep: string
  street: string
  streetNumber: string
  complement?: string
  city: string
  state: string
  neighborhood: string
}

interface CreatePaymentProps {
  amount: number
  paymentType: 'stripe' | 'credit' | 'debit' | 'money'
}

interface CreateOrderProps {
  id: string
  adress: CreateAdressProps
  payment: CreatePaymentProps
  status: string
}

interface CartContextType {
  cart: CartItemProps[]
  order: OrderProps
  addNewCartItem: (data: CreateCartItem) => void
  removeCartItem: (id: string) => void
  increaseCartItemAmount: (id: string) => void
  decreaseCartItemAmount: (id: string) => void
  addCheckoutItemFinished: (data: CreateOrderProps) => void
  cleanCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderChildren {
  children: ReactNode
}

const orderInitialState: OrderProps = {
  id: '',
  adress: {
    cep: '',
    street: '',
    streetNumber: '',
    complement: '',
    city: '',
    state: '',
    neighborhood: '',
  },
  payment: {
    amount: 0,
    paymentType: 'credit',
  },
  status: '',
}
export function CartContextProvider({ children }: CartContextProviderChildren) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      order: orderInitialState,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-coffee:cart-state-1.0.1',
      )

      if (!storedStateAsJSON) return initialState

      return JSON.parse(storedStateAsJSON)
    },
  )
  const { cart, order } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem('@ignite-coffee:cart-state-1.0.1', stateJSON)
  }, [cartState])
  function addNewCartItem(data: CreateCartItem) {
    const { description, imgUrl, quantity, title, type, id, price, priceId } =
      data
    const newCartItem: CartItemProps = {
      id,
      priceId,
      imgUrl,
      title,
      description,
      price,
      quantity,
      type,
    }

    dispatch(addCartItemAction(newCartItem))
  }

  function removeCartItem(itemId: string) {
    dispatch(removeCartItemAction(itemId))
  }

  function increaseCartItemAmount(itemId: string) {
    dispatch(increaseCartItemAmountAction(itemId))
  }
  function decreaseCartItemAmount(itemId: string) {
    dispatch(decreaseCartItemAmountAction(itemId))
  }
  function addCheckoutItemFinished(data: CreateOrderProps) {
    dispatch(addCheckoutItemFinishedAction(data))
  }
  function cleanCart() {
    dispatch(cleanCartAction())
  }
  return (
    <CartContext.Provider
      value={{
        cleanCart,
        addNewCartItem,
        removeCartItem,
        increaseCartItemAmount,
        decreaseCartItemAmount,
        cart,
        order,
        addCheckoutItemFinished,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
