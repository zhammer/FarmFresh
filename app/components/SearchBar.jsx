import React, { PropTypes } from 'react';

const SearchBar = ({ onChange, onClick }) => (
    <form>
        <input
            type='text'
            onChange={(e) => onChange(e)}/>
        <input type="submit"
            onClick={() => onClick()}
            style={{display: 'none'}}/>
    </form>
)

SearchBar.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default SearchBar;