import React, { useState, useMemo } from "react";
import { useCounter } from "../../Hooks/useCounter";
import "../02-useEffect/effects.css";

import { procesoPesado } from "../../Helpers/Helpers";

const MemoHook = () => {
  const { counter, increment } = useCounter(500);
  const [show, setShow] = useState(true);
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <>
      <h1>useMemo</h1>
      <hr />

      <h3>
        Counter:<small>{counter}</small>
      </h3>

      <p>{memoProcesoPesado}</p>
      <button onClick={increment} className="btn btn-primary">
        +1
      </button>

      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-primary m-3"
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default MemoHook;
