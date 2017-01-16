import React, { PropTypes } from 'react';



function styleWithColor (color) {
    return {
        width: '170px',
        height: '90px',
        margin: '20px',
        fontFamily: 'Andale Mono',
        letterSpacing: '-.3px',
        fontSize: '30px',
        textAlign: 'center',
        backgroundColor: color,
        borderRadius: '6px',
        border: 'none',
    }
}

const FatButton = ({ text, color = 'grey', onClick }) => (
    <button
        type='button'
        onClick={() => onClick()}
        style={styleWithColor(color)}>
        {text}
    </button>
);

FatButton.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default FatButton;