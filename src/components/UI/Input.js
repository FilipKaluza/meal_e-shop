import { Input } from 'antd';


const StyledAntInput = props => {
    return(
        <div className="Input">
            <label htmlFor={props.input.id} > {props.label} </label>
            <Input {...props.input} />
        </div>
    );
};

export default StyledAntInput;