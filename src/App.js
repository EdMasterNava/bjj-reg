import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Home from "./components/Home";
import "./components/css/App.css";
function App(){
    return (
      <>
        <Navbar />
        <div className="main-container">
          <Routes>
            <Route path="/bjj-reg/" element={<Home />} />
            <Route path="/bjj-reg/events" element={<Events />} />
          </Routes>
        </div>
      </>
    )
}
export default App;