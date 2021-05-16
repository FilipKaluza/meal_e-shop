import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === "ADD_ITEM") {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id) // if we have already this item in Cart it find index
        const existingCartItem = state.items[existingCartItemIndex] //access to specific Item in cart
        let updatedItems;

        if(existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            } // update amount in of existing cart item
            updatedItems = [...state.items ];
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item)
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    } else if(action.type === "REMOVE_ITEM" ) {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingCartItem = state.items[existingCartItemIndex] //access to specific Item in cart
        const updatedTotalAmount = state.totalAmount - existingCartItem.price // update total price
        let updatedItems;

        if( existingCartItem && existingCartItem.amount > 1) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1
            }
            updatedItems = [...state.items ]
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItems = state.items.filter((item) => item.id !== action.id)
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
     return defaultCartState
};


const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCart = (item) => {
        dispatchCartAction({type: "ADD_ITEM", item: item});
    };

    const removeItemFromCart = (id) => {
        dispatchCartAction({type: "REMOVE_ITEM", id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider