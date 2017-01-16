import React, { PropTypes } from 'react';
import NumberInput from './NumberInput.jsx';
import helpers from '../utils/UnitHelpers.jsx';

var textStyle = {
    fontFamily: 'Andale Mono',
    fontSize: '18px',
    letterSpacing: '-.3px',
    color: '#FFFFFF',
    marginTop: '10px',
}

var buttonStyle = {
    backgroundColor: '#BEEF9E',
    border: 'none',
    fontFamily: 'Andale Mono',
    color: '#434343',
    height: '25px',
    marginLeft: '10px',
}


const PurchaseButton = ({ price, unit = '', quantity, onPurchase, onUpdateQuantity }) => (
    <div style={{marginTop: '15px'}}>
        <span style={textStyle}>
            How many {unit ? helpers.toLongPlural(unit) : ''} would you like?
        </span>
        <span style={{marginLeft: '10px'}}>
            <NumberInput
            onChange={(e) => onUpdateQuantity(e)}/> 
        <span>
        </span>
            <button type='button' onClick={() => onPurchase()} style={buttonStyle} >
                Add to cart
            </button>
        </span>
    </div>
)

PurchaseButton.propTypes = {
    price: PropTypes.number.isRequired,
    unit: PropTypes.string,
    quantity: PropTypes.number,
    onPurchase: PropTypes.func.isRequired,
    onUpdateQuantity: PropTypes.func.isRequired
}

export default PurchaseButton;