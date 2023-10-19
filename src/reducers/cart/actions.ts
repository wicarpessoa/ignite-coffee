import { CartItemProps } from './reducer'

export enum ActionTypes {
  ADD_NEW_CART_ITEM = 'ADD_NEW_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
}
export type ActionTypesProps =
  | { type: ActionTypes.ADD_NEW_CART_ITEM; payload: CartItemProps }
  | { type: ActionTypes.REMOVE_CART_ITEM }

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
export function removeCartItemAction(): ActionTypesProps {
  return {
    type: ActionTypes.REMOVE_CART_ITEM,
  }
}
