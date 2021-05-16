import { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = ({onClick}) => {


    const [ bumpCart, setBumpCart ] = useState(false);
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0)

    useEffect(() => {
        if(cartCtx.items.length) {
            setBumpCart(true)
        }       
        const timer = setTimeout(() => {
            setBumpCart(false)
        }, 300)
        return () => clearTimeout(timer)

    }, [cartCtx.items])

    return(
        <button className={classNames("CartIconButton", {"Bump": bumpCart})} onClick={onClick}>
            <span className="icon">
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className="Badge">
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartButton;