import { ReactNode, createContext, useReducer } from 'react'
import { CartItemProps, cartReducer } from '../reducers/cart/reducer'
import {
  addCartItemAction,
  removeCartItemAction,
} from '../reducers/cart/actions'
import { v4 as uuidv4 } from 'uuid'

interface CreateCartItem {
  title: string
  description: string
  imgUrl: string
  type: string[]
  quantity: number
}

interface CartContextType {
  cart: CartItemProps[]
  addNewCartItem: (data: CreateCartItem) => void
  removeCartItem: () => void
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
    const { description, imgUrl, quantity, title, type } = data
    const newCartItem: CartItemProps = {
      description,
      id: uuidv4(),
      imgUrl,
      quantity,
      title,
      type,
    }

    dispatch(addCartItemAction(newCartItem))
  }

  function removeCartItem() {
    dispatch(removeCartItemAction())
  }

  return (
    <CartContext.Provider value={{ addNewCartItem, removeCartItem, cart }}>
      {children}
    </CartContext.Provider>
  )
}
