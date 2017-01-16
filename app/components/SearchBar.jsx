import React, { PropTypes } from 'react';
import styles from '../styles';
require('../../main.css');

/* TODO:
 * () Fix placeholder positioning
 */

var containerStyle = {
    width: '350px',
    height: '90px',
    background: '#C9C9CE',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    position: 'relative',
}

var inputStyle = {
    width: '350px',
    height: '90px',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: '#ffffff',
    border: 'none',
    fontFamily: 'Andale Mono',
    fontSize: '36px',
    letterSpacing: '-.3px',
    color: '#434343',
    placeholderColor: '#313638',
    float: 'left',
    padding: '10px',
    position: 'relative',
    borderWidth: '8px',
    borderColor: '#C9C9CE',
    borderStyle: 'solid',
    borderRadius: '15px'
}

var iconStyle = {
    position: 'absolute',
    top: '15%',
    right: '5%',
    fontSize: '20px',
    marginLeft: '17px',
    marginTop: '17px',
    zIndex: '1',
    color: '#8E8E93'
}

const SearchBar = ({ onChange, onClick, placeHolder }) => (
    <div style={styles.center}>
        <form>
            <div style={containerStyle}>
                <span className="icon" style={iconStyle}><i className="fa fa-search"></i></span>
                <input
                    style={inputStyle}
                    type='text'
                    placeholder={placeHolder ? placeHolder : ''}
                    onChange={(e) => onChange(e)}/>
            </div>
            <input type="submit"
                onClick={() => onClick()}
                style={{display: 'none'}}/>
        </form>
    </div>
)

SearchBar.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    placeHolder: PropTypes.string
}

export default SearchBar;