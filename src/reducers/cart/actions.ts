import { CartItemProps } from './reducer'

export enum ActionTypes {
  ADD_NEW_CART_ITEM = 'ADD_NEW_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  ADD_COUNT_ON_ITEM = 'ADD_COUNT_ON_ITEM',
  SUB_COUNT_ON_ITEM = 'SUB_COUNT_ON_ITEM',
}

interface id {
  id: string
}

export type ActionTypesProps =
  | { type: ActionTypes.ADD_NEW_CART_ITEM; payload: CartItemProps }
  | { type: ActionTypes.REMOVE_CART_ITEM; payload: id }
  | { type: ActionTypes.ADD_COUNT_ON_ITEM; payload: id }
  | { type: ActionTypes.SUB_COUNT_ON_ITEM; payload: id }

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

export function addCountOnItemCartAction(itemId: string): ActionTypesProps {
  return {
    type: ActionTypes.ADD_COUNT_ON_ITEM,
    payload: {
      id: itemId,
    },
  }
}
export function subCountOnItemCartAction(itemId: string): ActionTypesProps {
  return {
    type: ActionTypes.REMOVE_CART_ITEM,
    payload: {
      id: itemId,
    },
  }
}
