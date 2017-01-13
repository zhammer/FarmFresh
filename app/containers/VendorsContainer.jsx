import React from 'react';
import Vendors from '../components/Vendors.jsx';

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