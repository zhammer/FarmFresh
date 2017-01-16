import React, { PropTypes } from 'react';

var style = {
    opacity: '.1',
    width: '60%',
    display: 'block',
    margin: '0 auto',
    marginTop: '80px'
    
}

const Logo = ({ source }) => (
    <div>
        <img
        src={source}
        style={style}/>
    </div>
);

export default Logo;