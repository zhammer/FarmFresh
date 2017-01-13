import React from 'react';
import Vendors from '../components/Vendors.jsx';

//lb to product data?
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

var PRODUCT_NAME = 'lobster';

var DATA_LIST = [VENDOR_DATA_0, VENDOR_DATA_1];

class VendorsContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            selectedVendor: '',
            quantity: 0,
            justPurchased: 0
        };
    }
    handleClick (name) {
        this.setState({ 
            selectedVendor: name,
            justPurchased: 0,
            quantity: 0
        });
    }
    handlePurchase () {
        if (this.state.quantity > 0) {
            this.setState({
                justPurchased: this.state.quantity,
                quantity: 0
            });
        }
    }
    handleUpdateQuantity (e) {
        this.setState({
            quantity: parseInt(e.target.value)
        })
    }
    render () {
        return (
            <Vendors
                onClick={(name) => this.handleClick(name)}
                selectedVendor={this.state.selectedVendor}
                dataList={DATA_LIST}
                productName={PRODUCT_NAME}
                onUpdateQuantity={(e) => this.handleUpdateQuantity(e)}
                onPurchase={() => this.handlePurchase()}
                justPurchased={this.state.justPurchased}/>
        )
    } 
}

export default VendorsContainer;