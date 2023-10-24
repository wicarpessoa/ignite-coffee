import { CartItemProps } from './reducer'

export enum ActionTypes {
  ADD_NEW_CART_ITEM = 'ADD_NEW_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  INCREASE_CART_ITEM_AMOUNT = 'INCREASE_CART_ITEM_AMOUNT',
  DECREASE_CART_ITEM_AMOUNT = 'DECREASE_CART_ITEM_AMOUNT',
  ADD_CHECKOUT_ITEM = 'ADD_CHECKOUT_ITEM',
}

interface id {
  id: string
}

export type ActionTypesProps =
  | { type: ActionTypes.ADD_NEW_CART_ITEM; payload: CartItemProps }
  | { type: ActionTypes.REMOVE_CART_ITEM; payload: id }
  | { type: ActionTypes.INCREASE_CART_ITEM_AMOUNT; payload: id }
  | { type: ActionTypes.DECREASE_CART_ITEM_AMOUNT; payload: id }
// | { type: ActionTypes.ADD_CHECKOUT_ITEM; payload: id }

export function addCartItemAction(
  newCartItem: CartItemProps,
): ActionTypesProps {
  return {
    type: ActionTypes.ADD_NEW_CART_ITEM,
    payload: {
      ...newCartItem,
    },
  }
}
export function removeCartItemAction(itemId: string): ActionTypesProps {
  return {
    type: ActionTypes.REMOVE_CART_ITEM,
    payload: {
      id: itemId,
    },
  }
}

export function increaseCartItemAmountAction(itemId: string): ActionTypesProps {
  return {
    type: ActionTypes.INCREASE_CART_ITEM_AMOUNT,
    payload: {
      id: itemId,
    },
  }
}
export function decreaseCartItemAmountAction(itemId: string): ActionTypesProps {
  return {
    type: ActionTypes.DECREASE_CART_ITEM_AMOUNT,
    payload: {
      id: itemId,
    },
  }
}
// export function addCheckoutItemFinishedAction(): ActionTypesProps {
//   return {
//     type: ActionTypes.ADD_CHECKOUT_ITEM,
//     payload: { id: '1' },
//   }
// }
