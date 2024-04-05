import { ADD_TO_CART } from "../actions/addtoCart.action";
import { REMOVE_FROM_CART } from "../actions/removeFromCart.action";
import { INCREASE_QUANTITY } from "../actions/increaseQuantity.action";
import { DECREASE_QUANTITY } from "../actions/decreaseQuantity.action";
const initialUserState = {
    cart: []
}

export const mainReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }

        case REMOVE_FROM_CART:
            const updatedCart = state.cart.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                cart: updatedCart
            }

        case DECREASE_QUANTITY:
            const decreasedCart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    const newQuantity = Math.max(0, item.quantity - 1);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });

            return {
                ...state,
                cart: decreasedCart
            }

        case INCREASE_QUANTITY:
            const increasedCart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    const newQuantity = Math.max(0, item.quantity + 1);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });

            return {
                ...state,
                cart: increasedCart
            }
        default:
            return state;
    }
};
