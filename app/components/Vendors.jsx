var React = require('react');
var PropTypes = React.PropTypes;
var Vendor = require('./Vendor.jsx');

function Vendors (props) {
    var vendors = props.dataList.map(function(data){
        return (
            <Vendor
                key={data.name}
                data={data}
                isSelected={props.selectedVendor === data.name}
                onClick={props.onClick}/>
        )
    });
    return (
        <div>
            {vendors}
        </div>
    )
}

Vendors.propTypes = {
    dataList: PropTypes.array.isRequired,
    selectedVendor: PropTypes.string,
    onClick: PropTypes.func.isRequired
}


module.exports = Vendors;