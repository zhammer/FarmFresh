import React, { PropTypes } from 'react';
import Vendor from './Vendor.jsx';
import { transparentBg } from '../styles';

const Vendors = ({ vendors, selectedVendor, onClick, product, onPurchase, onUpdateQuantity, justPurchased }) => (
        <div>
        {vendors.map((vendor) => {
            return <Vendor
                        key={vendor.name}
                        vendorData={vendor}
                        product={product}
                        isSelected={selectedVendor === vendor.name}
                        onClick={() => onClick(vendor.name)}
                        productName={product.name}
                        onUpdateQuantity={(e) => onUpdateQuantity(e)}
                        onPurchase={() => onPurchase()}
                        justPurchased={justPurchased}/>
        })}
    </div>
)

Vendors.propTypes = {
    vendors: PropTypes.array.isRequired,
    selectedVendor: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onPurchase: PropTypes.func.isRequired,
    onUpdateQuantity: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    justPurchased: PropTypes.number,
}

export default Vendors;