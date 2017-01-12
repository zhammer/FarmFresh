import React, { PropTypes } from 'react';

const PriceMarker = ({ currency = '$', price, unit }) => (
    <span>
        {currency + price + (unit ? '/' + unit : '')}
    </span>
);

PriceMarker.propTypes = {
    currency: PropTypes.string,
    price: PropTypes.number.isRequired,
    unit: PropTypes.string,
}

export default PriceMarker;