import { useState } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/nav/Nav";
import HomePage from "./components/Pages/homePage";
import { Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      {/* Navbar to be consistent across all pages */}
        {location.pathname !== "/login" &&
          location.pathname !== "/register" && <Navbar />}
        <Routes>
          {/* <Route path="/" element={<Navigate to="/login" />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
    </>
  );
}

export default App;
