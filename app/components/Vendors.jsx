import React, { PropTypes } from 'react';
import Vendor from './Vendor.jsx';

const Vendors = ({ dataList, selectedVendor, onClick }) => {
    return (
        <div>
            {dataList.map((data) => {
                return <Vendor
                            key={data.name}
                            data={data}
                            isSelected={selectedVendor === data.name}
                            onClick={(name) => onClick(name)}/>
            })}
        </div>
    ) 
}

Vendors.propTypes = {
    dataList: PropTypes.array.isRequired,
    selectedVendor: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Vendors;