import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import './counter.css';

const CounterCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(100);

    return ( 
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr />
            <button onClick={() => increment(2)} className="btn btn-success btn-lg"> + 1</button>
            <button onClick={() => decrement(2)} className="btn btn-warning btn-lg"> - 1</button>
            <button onClick={reset} className="btn btn-danger btn-lg"> Reset </button>
        </>
     );
}
 
export default CounterCustomHook;