import { ReactNode, createContext, useReducer } from 'react'
import { CartItemProps, cartReducer } from '../reducers/cart/reducer'
import {
  addCartItemAction,
  addCountOnItemCartAction,
  removeCartItemAction,
  subCountOnItemCartAction,
} from '../reducers/cart/actions'

interface CreateCartItem {
  id: string
  title: string
  description: string
  imgUrl: string
  type: string[]
  quantity: number
}

interface CartContextType {
  cart: CartItemProps[]
  addNewCartItem: (data: CreateCartItem) => void
  removeCartItem: (id: string) => void
  addCountOnItemCart: (id: string) => void
  subCountOnItemCart: (id: string) => void
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
    const { description, imgUrl, quantity, title, type, id } = data
    const newCartItem: CartItemProps = {
      description,
      id,
      imgUrl,
      quantity,
      title,
      type,
    }

    dispatch(addCartItemAction(newCartItem))
  }

  function removeCartItem(itemId: string) {
    dispatch(removeCartItemAction(itemId))
  }

  function addCountOnItemCart(itemId: string) {
    dispatch(addCountOnItemCartAction(itemId))
  }
  function subCountOnItemCart(itemId: string) {
    dispatch(subCountOnItemCartAction(itemId))
  }

  return (
    <CartContext.Provider
      value={{
        addNewCartItem,
        removeCartItem,
        addCountOnItemCart,
        cart,
        subCountOnItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
