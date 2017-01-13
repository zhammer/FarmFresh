import React, { PropTypes } from 'react';
import NumberInput from './NumberInput.jsx';
import helpers from '../utils/UnitHelpers.jsx';

const PurchaseButton = ({ price, unit = '', quantity, onPurchase, onUpdateQuantity }) => (
    <div>
        <span>
            How many {unit ? helpers.toLongPlural(unit) : ''} would you like?
        </span>
        <NumberInput onChange={(e) => onUpdateQuantity(e)} /> 
        <span>
            <button type='button' onClick={() => onPurchase()} >
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