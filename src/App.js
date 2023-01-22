import "./App.css";
import Header from "./components/expensesTracker/Header";
import TransactionList from "./components/expensesTracker/TransactionList";
import AddTransaction from "./components/expensesTracker/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import Balance from "./components/expensesTracker/Balance";
import IncomeExpenses from "./components/expensesTracker/IncomeExpenses";
import React from "react";
import ChurchTax from "./components/expensesTracker/ChurchTax";
import AnnualAmount from "./components/expensesTracker/AnnualAmount";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance title="Your Balance" />
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
