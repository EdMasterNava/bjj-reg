import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Home from "./components/Home";
import Register from './components/Register';
import Login from "./components/Login";
import "./components/css/App.css";
import { AuthProvider } from "./components/AuthContext";
function App(){
    return (
      <>
        <AuthProvider>
          <Navbar />
          <div className="main-container">
            <Routes>
              <Route path="/bjj-reg/" element={<Home />} />
              <Route path="/bjj-reg/events" element={<Events />} />
              <Route path="/bjj-reg/register" element={<Register />} />
              <Route path="/bjj-reg/login" element={<Login />} />
            </Routes>
          </div>
        </AuthProvider>
      </>
    )
}
export default App;