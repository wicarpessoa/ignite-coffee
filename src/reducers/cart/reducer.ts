import { ActionTypes, ActionTypesProps } from './actions'

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
  switch (action.type) {
    case ActionTypes.ADD_NEW_CART_ITEM:
      return {
        cart: [...state.cart, action.payload],
      }
    case ActionTypes.REMOVE_CART_ITEM:
      return {
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }
    case ActionTypes.ADD_COUNT_ON_ITEM:
      return state
    case ActionTypes.SUB_COUNT_ON_ITEM:
      return state
    default:
      return state
  }
}
