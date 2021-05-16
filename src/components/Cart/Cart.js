import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";

import Modal from "../UI/Modal";

const Cart = ({onHideCart}) => {

    const ctx = useContext(CartContext)

    const roundPrice = ctx.totalAmount.toFixed(2);
    
    const addToCartHandler = (item) => {
        ctx.addItem({...item, amount: 1})
    };

    const removeFromCartHandler = (id) => {
        ctx.removeItem(id)
    };

    const cartItems = ctx.items.map((item) => {
        return(
            <CartItem 
                key={Math.floor(Math.random() * 500000)}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onAdd={addToCartHandler.bind(null, item)}
                onRemove={removeFromCartHandler.bind(null, item.id)}
                />
        );
    })
    return(
        <Modal onClose={onHideCart}>
            <ul className="Cart-items">
                {cartItems}
            </ul>
            <div className="Total">
                <span> Total amount </span>
                <span> {roundPrice}€ </span>
            </div>
            <div className="Actions">
                <button onClick={onHideCart} className="Button-close" > Close </button>
                { ctx.items.length ? <button className="Button-order" > Order </button> : <p> Košík je prázdny </p>}
            </div>
        </Modal>
    );
};

export default Cart;