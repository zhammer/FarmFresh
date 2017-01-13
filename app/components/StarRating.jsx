import React, { PropTypes } from 'react';

const StarRating = ( { rating, outOf = 5 } ) => (
        <span>
            {Array(rating + 1).join('★') + Array(outOf + 1 - rating).join('☆')}
        </span>
);

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
    outOf: PropTypes.number
}

export default StarRating;