import React, { PropTypes } from 'react';
import Vendors from '../components/Vendors.jsx';
import { transparentBg } from '../styles';
import StringHelpers from '../utils/StringHelpers.jsx';
import dbHelpers from '../utils/DBHelpers.jsx';

const ProductView = ({ productName, selectedVendor, justPurchased, onClick, onUpdateQuantity, onPurchase }) => (
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <div>
            TITLE BAR: {StringHelpers.capitalizeFirstLetter(productName)}
        </div>
        <Vendors
            onClick={(vendorName) => onClick(vendorName)}
            selectedVendor={selectedVendor}
            vendors={dbHelpers.getVendors(productName)}
            product={dbHelpers.getProduct(productName)}
            onUpdateQuantity={(e) => onUpdateQuantity(e)}
            onPurchase={() => onPurchase()}
            justPurchased={justPurchased}/>
    </div>
);

ProductView.propTypes = {
    productName: PropTypes.string.isRequired,
    selectedVendor: PropTypes.string,
    justPurchased: PropTypes.number,
    onClick: PropTypes.func.isRequired,
    onUpdateQuantity: PropTypes.func.isRequired,
    onPurchase: PropTypes.func.isRequired    
}

export default ProductView;
