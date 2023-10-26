import { ReactNode, createContext, useReducer } from 'react'
import { CartItemProps, cartReducer } from '../reducers/cart/reducer'
import {
  addCartItemAction,
  // addCheckoutItemFinishedAction,
  increaseCartItemAmountAction,
  removeCartItemAction,
  decreaseCartItemAmountAction,
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

interface CartContextType {
  cart: CartItemProps[]
  addNewCartItem: (data: CreateCartItem) => void
  removeCartItem: (id: string) => void
  increaseCartItemAmount: (id: string) => void
  decreaseCartItemAmount: (id: string) => void
  // addCheckoutItemFinished: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderChildren {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderChildren) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
  })
  const { cart } = cartState
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
  // function addCheckoutItemFinished() {
  //   dispatch(addCheckoutItemFinishedAction())
  // }

  return (
    <CartContext.Provider
      value={{
        addNewCartItem,
        removeCartItem,
        increaseCartItemAmount,
        decreaseCartItemAmount,
        cart,
        // addCheckoutItemFinished,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
