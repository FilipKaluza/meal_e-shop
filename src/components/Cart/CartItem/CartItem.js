

const CartItem = ({price, name, onRemove, onAdd, amount}) => {

    return(
        <li className="Cart-item">
            <div>
                <h2>{name}</h2>
                <div className="Summary" >
                <span className="Price" >{price}</span>
                <span className="Amount" >x {amount}</span>
                </div>
            </div>
            <div className="Actions" >
                <button onClick={onRemove}>−</button>
                <button onClick={onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;