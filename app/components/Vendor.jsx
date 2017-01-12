import React, { PropTypes } from 'react';
import StarRating from './StarRating.jsx';
import PriceMarker from './PriceMarker.jsx';

const Vendor = ({ data, isSelected, onClick }) => (
    <div>
       <div>
           <StarRating rating={data.rating} />
       </div>
       <button type='button' onClick={() => onClick(data.name)}>
           {data.name}, {data.location}
           <PriceMarker price={data.price} unit={data.unit} />
       </button>
       {isSelected && <div>{data.description}</div>}
   </div>
);

Vendor.propTypes = {
    data: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Vendor;