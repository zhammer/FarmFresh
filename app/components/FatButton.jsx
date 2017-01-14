import React, { PropTypes } from 'react';

const FatButton = ({ text, onClick }) => (
    <button type='button' onClick={() => onClick()}>
        {text}
    </button>
);

FatButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default FatButton;