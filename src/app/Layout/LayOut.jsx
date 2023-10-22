import React from 'react';
import Header from './Header';
import Fotter from './Fotter';

const LayOut = ({children}) => {
    return (
        <div>
            <Header></Header>
            {children}
            <Fotter></Fotter>
        </div>
    );
};

export default LayOut;