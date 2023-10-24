import { ReactNode, createContext, useReducer } from 'react'
import { CartItemProps, cartReducer } from '../reducers/cart/reducer'
import {
  addCartItemAction,
  // addCheckoutItemFinishedAction,
  addCountOnItemCartAction,
  removeCartItemAction,
  subCountOnItemCartAction,
} from '../reducers/cart/actions'
import { toast } from 'react-toastify'

interface CreateCartItem {
  id: string
  title: string
  description: string
  price: number
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
  console.log(cartState)
  const { cart } = cartState
  function addNewCartItem(data: CreateCartItem) {
    const { description, imgUrl, quantity, title, type, id, price } = data
    const newCartItem: CartItemProps = {
      id,
      description,
      title,
      price,
      quantity,
      imgUrl,
      type,
    }
    toast.success(`Item ${title} adicionado com sucesso!`, {
      toastId: id,
      autoClose: 1500000,
      containerId: id,
    })
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
  // function addCheckoutItemFinished() {
  //   dispatch(addCheckoutItemFinishedAction())
  // }

  return (
    <CartContext.Provider
      value={{
        addNewCartItem,
        removeCartItem,
        addCountOnItemCart,
        cart,
        subCountOnItemCart,
        // addCheckoutItemFinished,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
