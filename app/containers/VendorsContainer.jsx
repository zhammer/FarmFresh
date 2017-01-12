import React from 'react';
import Vendors from '../components/Vendors.jsx';

var VENDOR_DATA_0 = {
    name: 'Fresh Catch',
    location: 'Pawtucket, RI',
    price: 30,
    unit: 'lb',
    rating: 3,
    description: 'Fresh caught seafood caught fresh every day. Our team works tirelessly to get you the best fish!'
};

var VENDOR_DATA_1 = {
    name: 'Shuckers',
    location: 'Narragansett, RI',
    price: 25,
    unit: 'lb',
    rating: 4,
    description: 'Shuckers is Narragansett\'s original seafood eatery! We specialize is locally caught seafood.'
};

var DATA_LIST = [VENDOR_DATA_0, VENDOR_DATA_1];

class VendorsContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = { selectedVendor: '' };
    }
    handleClick (name) {
        this.setState({ selectedVendor: name });
    }
    render () {
        return (
            <Vendors
                onClick={(name) => this.handleClick(name)}
                selectedVendor={this.state.selectedVendor}
                dataList={DATA_LIST}/>
        )
    } 
}

export default VendorsContainer;