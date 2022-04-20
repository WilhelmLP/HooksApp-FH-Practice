import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import NavBar from "./NavBar";
import AboutScreen from "./AboutScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from './HomeScreen';
import Error404NoExist from "./Error404NoExist";

const AppRouter = () => {
  return (
    <Router>
      <div>

        <NavBar />

        <div className="container">
          <Routes>
            <Route exact path='/' element={<HomeScreen />}></Route>
            <Route exact path='/about' element={<AboutScreen />}></Route>
            <Route exact path='/login' element={<LoginScreen />}></Route>
            <Route element={ <Error404NoExist/> }></Route>
            {/* <Redirect to='/'/> */}

          </Routes>
        </div>

      </div>
    </Router>
  );
};

export default AppRouter;
