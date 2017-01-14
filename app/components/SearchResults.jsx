import React, { PropTypes } from 'react';
import FatButton from './FatButton.jsx';
import StringHelpers from '../utils/StringHelpers.jsx';

const SearchResults = ({ results, onSelectResult, resultsAreHashtags }) => {
    return (
        <div>
            {results.map((result) => {
                return (
                    <FatButton
                        key={result}
                        text={(resultsAreHashtags ? '#' : '') + StringHelpers.capitalizeFirstLetter(result)}
                        onClick={() => onSelectResult(result)}/>
                )
            })}
        </div>
    )
}

SearchResults.propTypes = {
    results: PropTypes.array,
    onSelectResult: PropTypes.func.isRequired,
    resultsAreHashtags: PropTypes.bool,
}

export default SearchResults;