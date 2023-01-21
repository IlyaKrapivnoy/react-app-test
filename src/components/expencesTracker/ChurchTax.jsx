import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const ChurchTax = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  const churchTax = ((total * 10) / 100).toFixed(2);

  return (
    <div className="count-inner-block">
      <h4>Church Tax - 10%</h4>
      <h1>{churchTax}</h1>
    </div>
  );
};

export default ChurchTax;
