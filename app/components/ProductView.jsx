import React, { PropTypes } from 'react';
import Vendors from '../components/Vendors.jsx';
import StringHelpers from '../utils/StringHelpers.jsx';
import dbHelpers from '../utils/DBHelpers.jsx';
import MainWrapper from './MainWrapper.jsx';
import BarWrapper from './BarWrapper.jsx';

const ProductView = ({ productName, selectedVendor, justPurchased, onClick, onUpdateQuantity, onPurchase }) => (
    <MainWrapper >
        <div>
            <BarWrapper
                title={StringHelpers.capitalizeFirstLetter(productName)}
                color={dbHelpers.getProductColor(productName)}/>
        </div>
        <Vendors
            onClick={(vendorName) => onClick(vendorName)}
            selectedVendor={selectedVendor}
            vendors={dbHelpers.getVendorsOfProduct(productName)}
            product={dbHelpers.getProduct(productName)}
            onUpdateQuantity={(e) => onUpdateQuantity(e)}
            onPurchase={() => onPurchase()}
            justPurchased={justPurchased}/>
    </MainWrapper>
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
