import React from 'react';
import Balance from './Balance';

const Header = () => {
    return (
        <>
            <h2>Expanse Tracker</h2>
            <div className='container'>
                <Balance />
            </div>
        </>
    );
};

export default Header;
