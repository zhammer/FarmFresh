import React, { PropTypes } from 'react';

var buttonStyle = {
    width: '100%',
    height: '60px',
    marginLeft: '0 auto',
    marginRight: '0 auto',
    fontFamily: 'Andale Mono',
    letterSpacing: '-1px',
    fontSize: '20px',
    textAlign: 'left',
    backgroundColor: '#FDE3E3',
    borderRadius: '6px',
    border: 'none',
}

var leftTitleStyle = {
    color: '#434343'
}

var rightTitleStyle = {
    color: '#BEEF9E',
    float: 'right',
    display: 'inline-block',
}

const LongButton = ({ leftTitle, rightTitle, onClick, color = 'grey' }) => (
       <button
           type='button'
           onClick={() => onClick()}
           style={buttonStyle}>
            <span style={leftTitleStyle}>
                {leftTitle}
            </span>
            <span style={rightTitleStyle}>
                {rightTitle}
            </span>
        </button>
);

export default LongButton;