import React from 'react';

var paragraphStyle = {
    fontFamily: 'Andale Mono',
    fontSize: '18px',
    letterSpacing: '-.3px',
    color: '#313638',
    marginTop: '10px'
}

const ParagraphWrapper = ({ children }) => (
    <div style={paragraphStyle}>
        {children}
    </div>
);

export default ParagraphWrapper