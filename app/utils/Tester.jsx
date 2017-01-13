import React from 'react';
import HelloES6 from './HelloES6.jsx';
import Vendor from '../components/Vendor.jsx';


var TEST_BOOL = false;

const Tester = () => {
    return  (
        <HelloES6
            name='Zach'
            isGoodbye={true}/>
    )
}

export default Tester;