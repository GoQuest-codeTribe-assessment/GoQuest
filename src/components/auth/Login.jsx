import React, { useState } from "react";
import "./login.css";
import logo from "../../assets/goquestLogo.png";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebaseApi";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      //   console.log("user", userCredential.user);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      if (error.code === "auth/wrong-password") {
        alert("Incorrect password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        alert("No account found with this email. Please register first.");
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email format.");
      } else {
        alert(`Login failed: ${error.message}`);
      }
      console.error("Login error:", error);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email to reset your password.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Check your inbox.");
    } catch (error) {
      console.error("Password reset error:", error);
      if (error.code === "auth/user-not-found") {
        alert("No account found with this email. Please register first.");
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email format.");
      } else {
        alert(`Failed to send password reset email: ${error.message}`);
      }
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
        <h2>Login Now</h2>
        <form onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
        <div className="helper-text">
          <a onClick={handleForgotPassword}>Forgot Password?</a>
          <br />
          <a onClick={() => navigate("/register")} href="#!">
            Do not have an account?
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

export default Login;
