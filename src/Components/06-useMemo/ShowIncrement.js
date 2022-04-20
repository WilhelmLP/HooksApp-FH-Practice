import React from "react";
import PropTypes from "prop-types";

const ShowIncrement = ({ increment }) => {
  console.log("Me volví a generar...");

  return (
    <button
      className="btn btn-success"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
};

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired,
};

export default ShowIncrement;
