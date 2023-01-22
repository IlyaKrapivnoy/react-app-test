import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import UseTotal from "../../hooks/useTotal";

const ChurchTax = () => {
  const { transactions } = useContext(GlobalContext);
  const total = UseTotal({ transactions });

  const churchTax = ((total * 10) / 100).toFixed(2);

  return (
    <div className="count-inner-block">
      <h4>Church Tax - 10%</h4>
      <h1>{churchTax}</h1>
    </div>
  );
};

export default ChurchTax;
