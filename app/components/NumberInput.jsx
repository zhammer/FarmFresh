import React, { PropTypes } from 'react';


//how do i only add a max parameter to the input if the param exists?
const NumberInput = ({ onChange, min = 0, max }) => (
    <input
        type='number'
        min={min}
        onChange={(e) => onChange(e)}/>
    
);

NumberInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    min: PropTypes.number,
    max: PropTypes.number
}

export default NumberInput;