import React from 'react';

var alertStyle = {
    fontFamily: 'Andale Mono',
    fontSize: '16px',
    letterSpacing: '-.3px',
    color: '#BEEF9E',
    marginTop: '10px'
}

const AlertWrapper = ({ children }) => (
    <div style={alertStyle}>
        {children}
    </div>
);

export default AlertWrapper;