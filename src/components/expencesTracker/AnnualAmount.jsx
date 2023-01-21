import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const AnnualAmount = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  const annualAmount = (total * 12).toFixed(2);

  return (
    <div className="count-inner-block">
      <h4>Annual Amount</h4>
      <h1>{annualAmount}</h1>
    </div>
  );
};

export default AnnualAmount;
