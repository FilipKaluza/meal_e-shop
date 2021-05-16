import { useRef, useState } from "react";
import Input from "../../../UI/Input";

const MealItemForm = ({onAddAmountToCart, id}) => {

    const [ amountIsValid, setAmountIsValid ] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        onAddAmountToCart(enteredAmountNumber)        
    };


    return(
        <form className="Form" onSubmit={submitHandler} >
            <Input 
                ref={amountInputRef}
                label={"Amount"} 
                input={{
                    id: "amount" + id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1"
                }} />
            <button type="submit" > + Add </button>
            { !amountIsValid && <p> Please enter a valid amount (1-5) </p>}
        </form>
    );
};

export default MealItemForm;