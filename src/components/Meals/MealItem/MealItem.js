import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm/MealItemForm";

const MealItem = props => {

    const cartCtx = useContext(CartContext);

    const price = `${props.price.toFixed(2)}€`;

    const addItemHandler = (amount) => {
        const item = {
            id: props.id,
            name: props.name,
            price: props.price.toFixed(2),
            amount: amount
        }
        cartCtx.addItem(item);
    }

    return(
        <li className="Meal">
            <div>
                <h3> {props.name} </h3>
                <div className="Description" > {props.description} </div>
                <div className="Price" > {price} </div>
            </div>
            <div>
                <MealItemForm onAddAmountToCart={addItemHandler} id={props.id} />
            </div>
        </li>
    );
};

export default MealItem;