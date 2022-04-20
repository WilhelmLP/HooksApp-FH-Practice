import React, { useContext } from "react";
import userContext from "./UserContext";

const LoginScreen = () => {

  const {setUser} = useContext(userContext)
  return (
    <>
      <h1>LoginScreen</h1>
      <hr/>
      <button 
        className="btn btn-primary"
        onClick={() => setUser({
          id: 1234556,
          name: 'Guillermo Linares Pereda',
          email: 'willytrooperdream@hotmail.com'

        })}>
        Login
      </button>
    </>
  );
};

export default LoginScreen;
