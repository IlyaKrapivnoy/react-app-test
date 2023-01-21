import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import UseTotal from "../../hooks/useTotal";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const total = UseTotal({ transactions });

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{total}</h1>
    </>
  );
};

export default Balance;
