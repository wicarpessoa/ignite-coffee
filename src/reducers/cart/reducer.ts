import { ActionTypesProps } from './actions'

export interface CartItemProps {
  id: string
  title: string
  description: string
  imgUrl: string
  type: string[]
  quantity: number
}

interface CartStateProps {
  cart: CartItemProps[]
}

export function cartReducer(state: CartStateProps, action: ActionTypesProps) {
  if (action.type === 'ADD_NEW_CART_ITEM') {
    return {
      cart: [...state.cart, action.payload],
    }
  }
  return state
}
