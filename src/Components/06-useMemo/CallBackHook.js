import React, { useCallback, useState, useEffect } from "react";
import "../02-useEffect/effects.css";

import ShowIncrement from "./ShowIncrement";

const CallBackHook = () => {
  const [counter, setCounter] = useState(0);

  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  useEffect(() => {}, [increment]);

  return (
    <>
      <h1>CallBackHook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};

export default CallBackHook;
