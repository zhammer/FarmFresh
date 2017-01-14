import React, { PropTypes } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import SearchResults from '../components/SearchResults.jsx';
import dbHelpers from '../utils/DBHelpers.jsx';

class SearchViewContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            search: ''
        };
    }
    isCategorySearch () {
        return this.state.search.charAt(0) === '#';
    }
    routeToProduct (productName) {
        this.context.router.push({
            pathname: '/product/' + productName,
        });
    }
    routeToCategory (categoryName) {
        this.context.router.push({
            pathname: '/category/' + categoryName,
        });
    }
    /* If search form submission is a valid category or 
     * product, routes to that category/product's page.
     */
    handleSubmit () {
        var search = this.state.search;
        if (this.isCategorySearch()) {
            search = search.substring(1);
            if (dbHelpers.isCategory(search)) {
                routeToCategory(search);
            }
        } else {
            if (dbHelpers.isProduct(search)) {
                this.routeToProduct(search);
            }
        }
    }
    handleChange (e) {
        this.setState ({
            search: e.target.value
        });
    }
    handleSelectResult (name) {
        this.isCategorySearch() ? this.routeToCategory(name) : this.routeToProduct(name);
    }
    render () {
        var searchResults;
        if (this.state.search) {
            searchResults = <SearchResults
                                results={dbHelpers.suggestions(this.state.search, this.isCategorySearch()).slice(0, 4)}
                                onSelectResult={(name) => this.handleSelectResult(name)}
                                resultsAreHashtags={this.isCategorySearch()}/>
        }
        return (
            <div>
                <SearchBar
                onClick={() => this.handleSubmit()}
                onChange={(e) => this.handleChange(e)}/>
                {searchResults}
            </div>
        )
    }
}

SearchViewContainer.contextTypes = {
    router: React.PropTypes.object.isRequired 
}

export default SearchViewContainer;