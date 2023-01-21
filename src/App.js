import "./App.css";
import Header from "./components/expencesTracker/Header";
import TransactionList from "./components/expencesTracker/TransactionList";
import AddTransaction from "./components/expencesTracker/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import Balance from "./components/expencesTracker/Balance";
import IncomeExpenses from "./components/expencesTracker/IncomeExpenses";
import React from "react";
import ChurchTax from "./components/expencesTracker/ChurchTax";
import AnnualAmount from "./components/expencesTracker/AnnualAmount";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <div className="counts-field">
          <ChurchTax />
          <AnnualAmount />
        </div>
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
