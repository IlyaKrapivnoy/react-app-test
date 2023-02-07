import React from 'react';
import './App.css';
import Header from './components/expensesTracker/Header';
import TransactionList from './components/expensesTracker/TransactionList';
import AddTransaction from './components/expensesTracker/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import IncomeExpenses from './components/expensesTracker/IncomeExpenses.js';
import ChurchTax from './components/expensesTracker/ChurchTax';
import AnnualAmount from './components/expensesTracker/AnnualAmount';
import Balance from './components/expensesTracker/Balance';

function App() {
    return (
        <GlobalProvider>
            <Header title='Expanse Tracker' />
            <div className='container'>
                <Balance title='Your Balance' />
                <IncomeExpenses />
                <div className='counts-field'>
                    <ChurchTax title='Church Tax - 10%' />
                    <AnnualAmount />
                </div>
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    );
}

export default App;
