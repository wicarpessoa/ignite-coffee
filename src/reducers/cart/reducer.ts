import { ActionTypes, ActionTypesProps } from './actions'

export interface CartItemProps {
  id: string
  title: string
  description: string
  price: number
  imgUrl: string
  type: string[]
  quantity: number
}

interface CartStateProps {
  cart: CartItemProps[]
}

export function cartReducer(state: CartStateProps, action: ActionTypesProps) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CART_ITEM: {
      const existingCartItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload.id,
      )

      if (existingCartItemIndex !== -1) {
        const updatedCart = [...state.cart]
        updatedCart[existingCartItemIndex] = {
          ...updatedCart[existingCartItemIndex],
          quantity:
            updatedCart[existingCartItemIndex].quantity +
            action.payload.quantity,
        }

        return {
          cart: updatedCart,
        }
      } else {
        return {
          cart: [...state.cart, action.payload],
        }
      }
    }
    case ActionTypes.REMOVE_CART_ITEM:
      return {
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }
    case ActionTypes.ADD_COUNT_ON_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      }
    case ActionTypes.SUB_COUNT_ON_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      }
    default:
      return state
  }
}
