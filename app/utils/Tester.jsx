import React from 'react';
var HelloES6 = require('./HelloES6.jsx');
import Vendor from '../components/Vendor.jsx';
import VendorsContainer from '../containers/VendorsContainer.jsx';

var VENDOR_DATA = {
    name: 'Fresh Catch',
    location: 'Pawtucket, RI',
    price: 30,
    unit: 'lb',
    rating: 3,
    description: 'Fresh caught seafood caught fresh every day. Our team works tirelessly to get you the best fish!'
};

const Tester = () => {
    return  (
        <div>
            <VendorsContainer />
        </div>
    )
}

export default Tester;