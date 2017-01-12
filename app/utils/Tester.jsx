var React = require('react');
var VendorsContainer = require('../containers/VendorsContainer.jsx');
var HelloES6 = require('./HelloES6.jsx');
import StarRating from '../components/StarRating.jsx';
import PriceMarker from '../components/PriceMarker.jsx';

const Tester = () => {
    return  (
        <div>
            <StarRating rating={3} />
            <div />
            <PriceMarker price={35} unit='lb' />
        </div>
    )
}

export default Tester;