import React, { PropTypes } from 'react';
import Vendor from './Vendor.jsx';

const Vendors = ({ dataList, selectedVendor, onClick, productName, onPurchase, onUpdateQuantity, justPurchased }) => {
    return (
        <div>
            {dataList.map((data) => {
                return <Vendor
                            key={data.name}
                            data={data}
                            isSelected={selectedVendor === data.name}
                            onClick={(name) => onClick(name)}
                            productName={productName}
                            onUpdateQuantity={(e) => onUpdateQuantity(e)}
                            onPurchase={() => onPurchase()}
                            justPurchased={justPurchased}/>
            })}
        </div>
    ) 
}

Vendors.propTypes = {
    dataList: PropTypes.array.isRequired,
    selectedVendor: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onPurchase: PropTypes.func.isRequired,
    onUpdateQuantity: PropTypes.func.isRequired,
    productName: PropTypes.string.isRequired,
    justPurchased: PropTypes.number,
}

export default Vendors;