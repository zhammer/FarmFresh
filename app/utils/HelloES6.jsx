import React, { PropTypes } from 'react';


const HelloES6 = ({ name = 'ES6', isGoodbye = false }) => (
      <div>
        {isGoodbye ? 'Goodbye' : 'Hello'} {name}!
      </div>
)

HelloES6.propTypes = {
    name: PropTypes.string,
    isGoodbye: PropTypes.bool
}

export default HelloES6