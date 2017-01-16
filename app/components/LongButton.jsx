import React, { PropTypes } from 'react';

function buttonStyle (color) {
    return (
        {
            width: '100%',
            height: '60px',
            marginLeft: '0 auto',
            marginRight: '0 auto',
            fontFamily: 'Andale Mono',
            letterSpacing: '-1px',
            fontSize: '20px',
            textAlign: 'left',
            backgroundColor: color,
            borderRadius: '6px',
            border: 'none',
        }
    )
}

var leftTitleStyle = {
    color: '#434343'
}

var rightTitleStyle = {
    color: '#FFFFFF',
    float: 'right',
    display: 'inline-block',
}

const LongButton = ({ leftTitle, rightTitle, onClick, color = 'grey' }) => (
       <button
           type='button'
           onClick={() => onClick()}
           style={buttonStyle(color)}>
            <span style={leftTitleStyle}>
                {leftTitle}
            </span>
            <span style={rightTitleStyle}>
                {rightTitle}
            </span>
        </button>
);

export default LongButton;