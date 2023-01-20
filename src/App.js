import './App.css';
import Header from './components/Header';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
    return (
        <GlobalProvider>
            <Header />
            <div className='container'>
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    );
}

export default App;
