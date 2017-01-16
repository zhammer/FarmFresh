import React from 'react';
import Header from './Header.jsx';

const Main = ({ children }) => (
    <div style={{marginTop: '150px'}}>
        <div>
            {children}
        </div>
    </div>
);

export default Main;