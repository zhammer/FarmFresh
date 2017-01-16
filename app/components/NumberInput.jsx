import React, { PropTypes } from 'react';

var style = {
    fontFamily: 'Andale Mono',
    width: '40px',
    fontSize: '15px',
    
}

const NumberInput = ({ onChange, min = 0 }) => (
    <input
        type='number'
        min={min}
        onChange={(e) => onChange(e)}
        style={style}/>
    
);

NumberInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    min: PropTypes.number,
}

export default NumberInput;