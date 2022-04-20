import React from "react";
import { useCounter } from "../../Hooks/useCounter";
import useFetch from "../../Hooks/useFetch";

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading ...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0"> {quote} </p>
          <footer className="blockquote-footer mt-2"> {author} </footer>
        </blockquote>
      )}

      <button className="btn btn-success" onClick={increment}>
        Siguiente
      </button>
    </>
  );
};

export default MultipleCustomHooks;
