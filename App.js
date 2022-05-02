import React, { useEffect } from "react";
import "./App.css";
import Home from "./Home/Home";
import Header from "./Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./Stateprovider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // it will only run once , when the app component loads.

    auth.onAuthStateChanged((authUser) => {
      // console.log("The User is >>>> ", authUser);

      if (authUser) {
        //  the user just logged in / the user was loggedd in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    // BEM Naming convention
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>

          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
