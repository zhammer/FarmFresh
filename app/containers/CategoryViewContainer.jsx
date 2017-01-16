import React, { Component } from 'react';
import CategoryView from '../components/CategoryView.jsx';

class CategoryViewContainer extends Component {
    constructor (props) {
        super(props);
    }
    handleSelectResult (productName) {
        this.context.router.push({
            pathname: '/product/' + productName,
        });
    }
    render () {
        return (
            <CategoryView
                name={this.props.routeParams.name}
                onSelectResult={(product) => this.handleSelectResult(product)} />
        )
    }
}

CategoryViewContainer.contextTypes = {
    router: React.PropTypes.object.isRequired 
}

export default CategoryViewContainer;