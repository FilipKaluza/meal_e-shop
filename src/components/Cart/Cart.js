import Modal from "../UI/Modal";

const Cart = (props) => {

    const cartItems = [{id: "c1", name: "Sushi", amount: 2, price: 12.99}].map((item) => {
        <li key={item.id}> {item.name} </li>
    })

    return(
        <Modal>
            <ul className="Cart-items">
                {cartItems}
            </ul>
            <div className="Total">
                <span> Total amount </span>
                <span> 35.62€ </span>
            </div>
            <div className="Actions">
                <button className="Button-close" > Close </button>
                <button className="Button-order" > Order </button>
            </div>
        </Modal>
    );
};

export default Cart;