import React from 'react';
import { GlobalContext } from '../../context/GlobalState';
import useTotal from '../../hooks/useTotal';

const Balance = ({ title }: { title: string }) => {
    const { transactions } = React.useContext(GlobalContext);
    const total = useTotal({ transactions });

    return (
        <>
            <h4>{title}</h4>
            <h1>{total}</h1>
        </>
    );
};

export default Balance;
