import './App.css';
import Header from './components/Header';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

function App() {
    return (
        <div>
            <Header />
            <TransactionList />
            <AddTransaction />
        </div>
    );
}

export default App;
