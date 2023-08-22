
import { useContext } from 'react';
import { CartItem } from '../../models/cartItem';
import createDataContext from '../createDataContext';
import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from './type';

interface CartState {
  items: { [id:number]:{ id: number;
    price: number;
    name: string;
    img: string;
    quantity: number;
    total: number;} };
  totalAmount: number;
}

interface CartAction {
  type: string;
  payload?: any;
}

const initialState: CartState = {
  items: {},
  totalAmount: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case ADD_TO_CART: {
      const prodId = action.payload.id;
      let quantity = 1;
      let prevItemTotal = 0;

      if (state.items[prodId]) {
        quantity = state.items[prodId].quantity + 1;
        prevItemTotal = state.items[prodId].total;
      }

      const cartItem = new CartItem(action.payload, quantity);
      const newAmount = state.totalAmount + cartItem.total - prevItemTotal;

      return {
        items: {
          ...state.items,
          [prodId]: cartItem,
        },
        totalAmount: newAmount < 0 ? 0 : newAmount,
      };
    }

    case DECREASE_QUANTITY: {
      const prodId = action.payload.id;
      const prevItem = state.items[prodId];

      if (prevItem.quantity > 1) {
        const newQuantity = prevItem.quantity - 1;
        const cartItem = new CartItem(action.payload, newQuantity);
        const newAmount = state.totalAmount - action.payload.price;

        return {
          items: { ...state.items, [prodId]: cartItem },
          totalAmount: newAmount < 0 ? 0 : newAmount,
        };
      }

      return state;
    }

    case REMOVE_FROM_CART: {
      const prodId = action.payload.id;
      if (state.items[prodId]) {
        const updatedItems: { [key: string]: CartItem } = {};
        const newAmount = state.totalAmount - state.items[prodId].total;
        for (let id in state.items) {
          if (id != prodId) updatedItems[id] = state.items[id];
        }

        return {
          items: updatedItems,
          totalAmount: newAmount < 0 ? 0 : newAmount,
        };
      }
      return state;
    }

    case CLEAR_CART: {
      return initialState;
    }

    default:
      return state;
  }
};

const addToCart = (dispatch: React.Dispatch<CartAction>) => (product: any) => {
  dispatch({ type: ADD_TO_CART, payload: product });
};

const decreaseQuantity = (dispatch: React.Dispatch<CartAction>) => (
  product: any
) => {
  dispatch({ type: DECREASE_QUANTITY, payload: product });
};

const removeFromCart = (dispatch: React.Dispatch<CartAction>) => (
  product: any
) => {
  dispatch({ type: REMOVE_FROM_CART, payload: product });
};

const clearCart = (dispatch: React.Dispatch<CartAction>) => () => {
  dispatch({ type: CLEAR_CART });
};

export const { Context, Provider } = createDataContext(
  cartReducer,
  initialState,
  { addToCart, decreaseQuantity, removeFromCart, clearCart }
);


export const useCart =( ) =>useContext(Context)