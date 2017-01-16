import React, { PropTypes } from 'react';
import FatButton from './FatButton.jsx';
import StringHelpers from '../utils/StringHelpers.jsx';
import FatButtonCollection from './FatButtonCollection.jsx';

const SearchResults = ({ results, onSelectResult, resultsAreHashtags }) => {
    return (
        <FatButtonCollection>
            {results.map((result) => {
                var name = result[0];
                var color = result[1];
                return (
                    <FatButton
                        key={name}
                        text={(resultsAreHashtags ? '#' : '') + StringHelpers.capitalizeFirstLetter(name)}
                        onClick={() => onSelectResult(name)}
                        color={color}/>
                )
            })}
        </FatButtonCollection>
    )
}

SearchResults.propTypes = {
    results: PropTypes.array,
    onSelectResult: PropTypes.func.isRequired,
    resultsAreHashtags: PropTypes.bool,
}

export default SearchResults;