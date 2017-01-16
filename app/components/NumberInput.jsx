import React, { PropTypes } from 'react';

const NumberInput = ({ onChange, min = 0 }) => (
    <input
        type='number'
        min={min}
        onChange={(e) => onChange(e)}/>
    
);

NumberInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    min: PropTypes.number,
}

export default NumberInput;