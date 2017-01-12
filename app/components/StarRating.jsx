import React, { PropTypes } from 'react';

const StarRating = ( { rating } ) => (
        <span>
            {Array(rating + 1).join('★') + Array(6 - rating).join('☆')}
        </span>
);

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
}

export default StarRating;