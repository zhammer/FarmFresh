import React, { PropTypes } from 'react';
import ProductView from '../components/ProductView.jsx';

class ProductViewContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            selectedVendor: '',
            quantity: 0,
            justPurchased: 0
        };
    }
    //maybe handle select?
    handleClick (name) {
        var newVendor = name === this.state.selectedVendor ? '' : name;
        this.setState({ 
            selectedVendor: newVendor,
            justPurchased: 0,
            quantity: 0
        });
    }
    handleUpdateQuantity (e) {
        this.setState({
            quantity: parseInt(e.target.value)
        })
    }
    handlePurchase () {
        if (this.state.quantity > 0) {
            this.setState({
                justPurchased: this.state.quantity,
                quantity: 0
            });
        }
    }
    render () {
        return (
            <ProductView 
                productName={this.props.routeParams.name}
                selectedVendor={this.state.selectedVendor}
                justPurchased={this.state.justPurchased}
                onClick={(name) => this.handleClick(name)}
                onUpdateQuantity={(e) => this.handleUpdateQuantity(e)}
                onPurchase={() => this.handlePurchase()} />
        )
    }
    
    
}
    
    
export default ProductViewContainer;