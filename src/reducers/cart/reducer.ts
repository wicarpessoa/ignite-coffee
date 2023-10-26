import { ActionTypes, ActionTypesProps } from './actions'

export interface CartItemProps {
  id: string
  priceId: string
  title: string
  description: string
  price: number
  imgUrl: string
  type: string[]
  quantity: number
}

interface AdressProps {
  cep: string
  street: string
  streetNumber: string
  complement?: string
  city: string
  state: string
  neighborhood: string
}

interface PaymentProps {
  amount: number
  paymentType: 'stripe' | 'credit' | 'debit' | 'money'
}

export interface OrderProps {
  id: string
  status: string
  adress: AdressProps
  payment: PaymentProps
}

interface CartStateProps {
  cart: CartItemProps[]
  order: OrderProps
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
          ...state,
          cart: updatedCart,
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        }
      }
    }
    case ActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }
    case ActionTypes.INCREASE_CART_ITEM_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      }
    case ActionTypes.DECREASE_CART_ITEM_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      }
    case ActionTypes.ADD_CHECKOUT_ITEM:
      console.log(action.payload)
      return {
        ...state,
        order: action.payload,
      }
    case ActionTypes.CLEAN_CART:
      return {
        ...state,
        cart: [],
      }
    default:
      return state
  }
}
