import React, { useState } from "react";
import "./login.css";
import logo from "../../assets/goquestLogo.png";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebaseApi";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      //   console.log("user registered", user);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

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
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" type="submit">
            Register
          </button>
        </form>
        <div className="helper-text">
          <a onClick={() => navigate("/login")} href="#!">
            Already have an account? LogIn
          </a>
        </div>
      </div>
      {loading && (
        <div className="loader-cont">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default Register;
