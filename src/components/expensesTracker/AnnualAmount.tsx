import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import useTotal from '../../hooks/useTotal';

const AnnualAmount = () => {
  const { transactions } = useContext(GlobalContext);
  const total = useTotal({ transactions });

  const annualAmount = (total * 12).toFixed(2);

  return (
    <div className="count-inner-block">
      <h4>Annual Amount</h4>
      <h1>{annualAmount}</h1>
    </div>
  );
};

export default AnnualAmount;
