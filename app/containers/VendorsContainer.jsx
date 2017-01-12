var React = require('react');
var Vendors = require('../components/Vendors.jsx');

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

var VendorsContainer = React.createClass({
    getInitialState: function () {
        return {
            selectedVendor: '',
        }
    },
    handleClick: function (name) {
        var selected = this.state.selectedVendor === 'Shuckers'? 'Fresh Catch' : 'Shuckers';
        this.setState({
            selectedVendor: selected,
        })
    },
    render: function () {
        return (
            <Vendors
                onClick={this.handleClick}
                selectedVendor={this.state.selectedVendor}
                dataList={DATA_LIST}/>
        )
    }
});

module.exports = VendorsContainer;