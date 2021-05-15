import MealItemForm from "./MealItemForm/MealItemForm";

const MealItem = props => {

    const price = `${props.price.toFixed(2)}€`;

    return(
        <li className="Meal">
            <div>
                <h3> {props.name} </h3>
                <div className="Description" > {props.description} </div>
                <div className="Price" > {price} </div>
            </div>
            <div>
                <MealItemForm id={props.id} />
            </div>
        </li>
    );
};

export default MealItem;