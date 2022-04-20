import React, { useEffect, useState } from "react";

import { Message } from "./Message";

import "./effects.css";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log("Hey!");
  }, []);

  useEffect(() => {
    console.log("El formStateCambio");
  }, [formState]);

  useEffect(() => {
    console.log("El email cambio");
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control m-2"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control m-2"
          placeholder="micorreo@email.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === "123" && <Message />}
    </>
  );
};

export default SimpleForm;

/**
 ** El useEffect es un hook que nos permite ejecutar algun efecto secundario que evita el loop infinito de useState,
 ** además de pisibilitar el manejo de los efectos que tienen los cambios en el componente.
 ** Hay comportamientos no deseados de los efectos.
 */
