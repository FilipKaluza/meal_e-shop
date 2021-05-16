import { forwardRef } from 'react';

const StyledAntInput = forwardRef((props, ref) => {
    return(
        <div className="Input">
            <label htmlFor={props.input.id} > {props.label} </label>
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default StyledAntInput;