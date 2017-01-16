import React, { PropTypes } from 'react';
import dbHelpers from '../utils/DBHelpers.jsx';
import MainWrapper from './MainWrapper.jsx';
import SearchResults from '../components/SearchResults.jsx';
import BarWrapper from './BarWrapper.jsx';

const CategoryView = ({ name, onSelectResult }) => (
    <MainWrapper>
        <div>
            <BarWrapper title={'#' + name} color={dbHelpers.getCategoryColor(name)}/>
        </div>
        <SearchResults
            results={dbHelpers.getProductsInCategory(name)}
            onSelectResult={(product) => onSelectResult(product)} />
    </MainWrapper>
);

CategoryView.propTypes = {
    name: PropTypes.string.isRequired,
    onSelectResult: PropTypes.func.isRequired    
}

export default CategoryView;