import React, { Component } from 'react';
import SearchResults from '../components/SearchResults.jsx';
import dbHelpers from '../utils/DBHelpers.jsx';

class CategoryViewContainer extends Component {
    constructor (props) {
        super(props);
    }
    handleClick (productName) {
        this.context.router.push({
            pathname: '/product/' + productName,
        });
    }
    render () {
        return (
            <div>
                <div>
                    CATEGORY: {'#' + this.props.routeParams.name}
                </div>
                <SearchResults
                    results={dbHelpers.productsInCategory(this.props.routeParams.name)}
                    onSelectResult={(name) => this.handleClick(name)} />
            </div>
        )
    }
}

CategoryViewContainer.contextTypes = {
    router: React.PropTypes.object.isRequired 
}

export default CategoryViewContainer;