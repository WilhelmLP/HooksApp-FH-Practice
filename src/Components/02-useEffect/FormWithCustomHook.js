import React, { useEffect } from "react";
import useForm from "../../Hooks/useForm";

import "./effects.css";

const FormWithCustomHook = () => {
  const [formValue, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValue;

  useEffect(() => {
    console.log("el email cambió");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
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

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control m-2"
          placeholder="******"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default FormWithCustomHook;
