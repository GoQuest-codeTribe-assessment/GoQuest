import { useState } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/nav/Nav";
import HomePage from "./components/Pages/homePage";
import { BrowserRouter as Router, Route, Routes, Navigate,useLocation } from "react-router-dom";

function App() {
  return (
    <>
          {/* Navbar to be consistent across all pages */}
        <Router>      
        {location.pathname !== "/login" && location.pathname !== "/register" && <Navbar />}
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
