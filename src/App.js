import './App.css';
import Header from './components/Header';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import React from 'react';
import ChurchTax from './components/ChurchTax';

function App() {
    return (
        <GlobalProvider>
            <Header />
            <div className='container'>
                <Balance />
                <IncomeExpenses />
                <ChurchTax />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    );
}

export default App;
