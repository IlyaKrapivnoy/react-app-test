import * as React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import useTotal from '../../hooks/useTotal';

const ChurchTax = ({ title }: { title: string }) => {
  const { transactions } = useContext(GlobalContext);
  const total = useTotal({ transactions });

  const churchTax = ((total * 10) / 100).toFixed(2);

  return (
    <div className="count-inner-block">
      <h4>{title}</h4>
      <h1>{churchTax}</h1>
    </div>
  );
};

export default ChurchTax;
