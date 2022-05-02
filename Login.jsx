import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
// import { ImportExportOutlined } from "@mui/icons-material";
import { auth } from "../firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn(event) {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("this is login");
        navigate("/");
      })
      .catch((error) =>
        alert("Sorry Sir , You are not Registerd, please Register")
      );
  }

  function Register(event) {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // succefull creted user with email nad password
        // console.log(auth);
        console.log("success");
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__img"
          src="https://images.indianexpress.com/2015/05/amazon-logo-759.jpg"
        ></img>
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>

        <form>
          <h5>E-Mail</h5>
          <input
            placeholder="Enter Email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="off"
          ></input>

          <h5>Password</h5>
          <input
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="off"
          ></input>
          <div className="checkbox">
            <input type="checkbox"></input>
            <label>
              This is terms And Condition , you should be agrreed for signIn .
            </label>
          </div>

          <button className="signIn__button" type="submit" onClick={signIn}>
            Sign In
          </button>

          <p>New To Amazon?</p>

          <button className="new__button" onClick={Register}>
            Create Your Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
