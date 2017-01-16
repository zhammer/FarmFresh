import React, { PropTypes } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import SearchResults from '../components/SearchResults.jsx';
import dbHelpers from '../utils/DBHelpers.jsx';
import MainWrapper from '../components/MainWrapper.jsx';
import Logo from '../components/Logo.jsx';

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
                this.routeToCategory(search);
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
        var searchResults, logo;
        if (this.state.search) {
            searchResults = <SearchResults
                                results={this.isCategorySearch() ? dbHelpers.suggestCategories(this.state.search) : dbHelpers.suggestProducts(this.state.search)}
                                onSelectResult={(name) => this.handleSelectResult(name)}
                                resultsAreHashtags={this.isCategorySearch()}/>
        }
        else {
            logo = <Logo
                       source='../../assets/images/FarmersMarket.png' />;
        }
        return (
            <MainWrapper>
                <SearchBar
                    onClick={() => this.handleSubmit()}
                    onChange={(e) => this.handleChange(e)}
                    placeHolder="What ingredients do you need?"/>
                {searchResults}
                    {logo}
            </MainWrapper>
        )
    }
}

SearchViewContainer.contextTypes = {
    router: React.PropTypes.object.isRequired 
}

export default SearchViewContainer;