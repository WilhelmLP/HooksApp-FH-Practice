import React, { useState } from "react";
import { useCounter } from "../../Hooks/useCounter";
import Small from "./Small";
import "../02-useEffect/effects.css";

const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>useMemo</h1>
      <hr />

      <h2>
        Counter: <Small value={counter} />
      </h2>
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

export default Memorize;
