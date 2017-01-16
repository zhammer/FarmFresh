import React from 'react';
import Header from './Header.jsx';

const Main = ({ children }) => (
    <div>
        <Header />
        <div>
            {children}
        </div>
    </div>
);

export default Main;