import React from 'react';
import HelloES6 from './HelloES6.jsx';
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

var TEST_BOOL = false;

const Tester = () => {
    return  (
        <div>
            <VendorsContainer />
        </div>
//        <HelloES6
//            name='Zach'
//            isGoodbye={true}/>
    )
}

export default Tester;