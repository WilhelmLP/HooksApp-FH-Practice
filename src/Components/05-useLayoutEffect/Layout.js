import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../Hooks/useCounter";
import useFetch from "../../Hooks/useFetch";

import "./Layout.css";

const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  const pTag = useRef();

  const [boxsize, setBoxsize] = useState({});

  useLayoutEffect(() => {
    setBoxsize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>useLayoutEffect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0">
          {" "}
          {quote}{" "}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxsize)}</pre>

      <button className="btn btn-success" onClick={increment}>
        Siguiente
      </button>
    </>
  );
};

export default Layout;
