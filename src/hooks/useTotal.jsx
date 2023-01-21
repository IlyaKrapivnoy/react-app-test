const UseTotal = ({ transactions }) => {
  const amounts = transactions.map((transaction) => transaction.amount);
  return amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
};

export default UseTotal;
