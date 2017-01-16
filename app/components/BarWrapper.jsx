import React, { PropTypes } from 'react';

/* TODO:
 * () Make this reusable for search bar
 * () add back button functionality
 * () add image support
 
 */

var containerStyle = {
    width: '350px',
    height: '90px',
    background: '#C9C9CE',
}

var barStyle = {
    width: '350px',
    height: '90px',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: '#ffffff',
    fontFamily: 'Andale Mono',
    fontSize: '36px',
    letterSpacing: '-.3px',
    color: '#313638',
    paddingLeft: '20px',
    paddingTop: '12px',
    position: 'relative',
    borderWidth: '8px',
    borderColor: '#C9C9CE',
    borderStyle: 'solid',
    borderRadius: '15px',
}

function styleWithColor (bgColor) {
    return {
        width: '350px',
        height: '90px',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: bgColor,
        fontFamily: 'Andale Mono',
        fontSize: '36px',
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

const BarWrapper = ({ title, color='#FFFFFF' }) => {
    return (
        <div style={containerStyle}>
            <div style={styleWithColor(color)}>
                {title}
            </div>
        </div>
    )
}

BarWrapper.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default BarWrapper;