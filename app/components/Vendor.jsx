import React from 'react';
var PropTypes = React.PropTypes;
import StarRating from './StarRating.jsx';
var PriceMarker = require('./PriceMarker.jsx');

const Vendor = (props) => (
    <div>
       <div>
           <StarRating rating={props.data.rating} />
       </div>
       <button type='button' onClick={props.onClick}>
           {props.data.name}, {props.data.location}
           <PriceMarker price={props.data.price} unit={props.data.unit} />
       </button>
       {props.isSelected && <div>{props.data.description}</div>}
   </div>
);

Vendor.propTypes = {
    data: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Vendor;