import Input from "../../../UI/Input";

const MealItemForm = props => {

    return(
        <form className="Form">
            <Input 
                label={"Amount"} 
                input={{
                    id: "amount" + props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1"
                }} />
            <button> + Add </button>
        </form>
    );
};

export default MealItemForm;