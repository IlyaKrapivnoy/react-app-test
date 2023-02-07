import { ITransaction } from '../types/data';

const useTotal = (transactions: ITransaction[]) =>
    transactions
        .reduce((acc, transaction) => (acc += transaction.amount), 0)
        .toFixed(2);

export default useTotal;
