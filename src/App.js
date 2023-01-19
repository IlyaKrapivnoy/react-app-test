import './App.css';
import Header from './components/Header';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import IncomeExpenses from './components/IncomeExpenses';

function App() {
    return (
        <div>
            <Header />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
        </div>
    );
}

export default App;
