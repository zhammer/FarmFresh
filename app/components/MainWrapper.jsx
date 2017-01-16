import React from 'react';
import { transparentBg } from '../styles';

var style = {
    width: '50%',
    margin: '0 auto',
    marginTop: '20px',
}

const MainWrapper = ({ children }) => (
    <div style={style} >
        {children}
    </div>
);

export default MainWrapper;