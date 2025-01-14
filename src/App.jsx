import { useState } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/nav/Nav";
import HomePage from "./components/Pages/homePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* Routes for page navigation */}
      <Router>
        {/* Navbar to be consistent across all pages */}
        <Navbar />

        <Routes>

          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
