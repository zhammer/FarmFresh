import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

/* TODO:
 * () Make this reusable for search bar
 * () add back button functionality
 * () add image support
 
 */



var containerStyle = {
    float: 'right',
    width: '88%',
    marginRight: '20px',
    height: '90px',
    background: '#C9C9CE',
}

function style (bgColor) {
    return {
        width: '100%',
        height: '90px',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: bgColor,
        fontFamily: 'Andale Mono',
        fontSize: '36px',
        float: 'right',
        letterSpacing: '-.3px',
        color: '#434343',
        paddingLeft: '20px',
        paddingTop: '12px',
        position: 'relative',
        borderWidth: '8px',
        borderColor: '#C9C9CE',
        borderStyle: 'solid',
        borderRadius: '15px'
    }
}

var iconStyle = {
    fontSize: '50px',
    height: '90px',
    color: '#C9C9CE',
    border: 'none',
    background: 'none'
}

const BarWrapper = ({ title, color='grey'}) => {
    return (
        <div>
            <button
                type='button'
                style={iconStyle}
                onClick={browserHistory.goBack}>
                    <i className="fa fa-arrow-left" />
            </button>
            <div style={containerStyle}>
                <div style={style(color)}>
                    {title}
                </div>
            </div>
        </div>
    )
}

BarWrapper.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default BarWrapper;