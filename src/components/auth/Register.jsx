import React from "react";
import "./login.css";
import logo from "../../assets/goquestLogo.png";
const Register = () => {
  return (
    <div className="login-container">
      <div className="left-panel">
        <h1>GoQuest</h1>
      </div>
      <div className="right-panel">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h2>Register Now</h2>
        <form>
          <input type="email" placeholder="Email" className="input-field" />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <button className="login-button">Register</button>
        </form>
        <div className="helper-text">
          <a href="#">Forgot Password?</a>
          <br />
          <a href="#">Already have an account? LogIn</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
