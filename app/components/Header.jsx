import React from 'react';

var style = {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
}

const Header = (props) => (
  
    <div style={style}>
        <span style={{left: '0%'}}>Left</span>
        <span style={{float: 'right'}}>Right</span>
        <div></div>
    </div>

);

export default Header;