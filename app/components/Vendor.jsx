import React, { PropTypes } from 'react';
import StarRating from './StarRating.jsx';
import PriceMarker from './PriceMarker.jsx';
import PurchaseButton from './PurchaseButton.jsx';
import helpers from '../utils/UnitHelpers.jsx';

const Vendor = ({ data, isSelected, onClick, productName, onPurchase, onUpdateQuantity, justPurchased }) => {
    var description, purchaseButton, confirmationMessage;
    if (isSelected) {
        description = <div>{data.description}</div>;
        purchaseButton = <PurchaseButton
                               price={data.price}
                               unit={data.unit}
                               quantity={0}
                               onPurchase={() => onPurchase()}
                               onUpdateQuantity={(e) => onUpdateQuantity(e)}/>
        if (justPurchased) {
            confirmationMessage = <div>(You added {justPurchased} {helpers.toLongPlural(data.unit)} of {productName} to your cart!)</div>
        }
    }
    return (
        <div>
           <div>
               <StarRating rating={data.rating} />
           </div>
           <button type='button' onClick={() => onClick(data.name)}>
               {data.name}, {data.location}
               <PriceMarker price={data.price} unit={data.unit} />
           </button>
            {description}
            {confirmationMessage}
            {purchaseButton}
       </div> 
    ) 
}


Vendor.propTypes = {
    data: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    productName: PropTypes.string.isRequired,
    onPurchase: PropTypes.func.isRequired,
    onUpdateQuantity: PropTypes.func.isRequired,
    justPurchased: PropTypes.number
}

export default Vendor;