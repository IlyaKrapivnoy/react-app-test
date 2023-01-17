import React from 'react';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';

const Header = () => {
    return (
        <>
            <h2>Expanse Tracker</h2>
            <div className='container'>
                <Balance />
                <IncomeExpenses />
            </div>
        </>
    );
};

export default Header;
