import React, { PropTypes } from 'react';
import StarRating from './StarRating.jsx';
import PurchaseButton from './PurchaseButton.jsx';
import LongButton from './LongButton.jsx';
import helpers from '../utils/UnitHelpers.jsx';
import priceMarker from './PriceMarker.jsx';
import ParagraphWrapper from './ParagraphWrapper.jsx';
import { space } from '../styles';

//later should pass VendorData and Product Data (color, name, unit)

const Vendor = ({ vendorData, isSelected, onClick, product, onPurchase, onUpdateQuantity, justPurchased }) => {
    var description, purchaseButton, confirmationMessage;
    if (isSelected) {
        description = <ParagraphWrapper>{vendorData.description}</ParagraphWrapper>;
        purchaseButton = <PurchaseButton
                               price={vendorData.price}
                               unit={product.unit}
                               quantity={0}
                               onPurchase={() => onPurchase()}
                               onUpdateQuantity={(e) => onUpdateQuantity(e)}/>
        if (justPurchased) {
            confirmationMessage = <div>(You added {justPurchased} {helpers.toLongPlural(product.unit)} of {product.name} to your cart!)</div>
        }
    }
    return (
        <div style={space}>
           <div>
               <StarRating rating={vendorData.rating} />
           </div>
           <LongButton
               leftTitle={vendorData.name + ', ' + vendorData.location}
               rightTitle={priceMarker('$', vendorData.productPrices[product.name], product.unit)}
               onClick={() => onClick()}
               color={product.color}/>
            {description}
            {confirmationMessage}
            {purchaseButton}
       </div> 
    ) 
}


Vendor.propTypes = {
    vendorData: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    productName: PropTypes.string.isRequired,
    onPurchase: PropTypes.func.isRequired,
    onUpdateQuantity: PropTypes.func.isRequired,
    justPurchased: PropTypes.number
}

export default Vendor;