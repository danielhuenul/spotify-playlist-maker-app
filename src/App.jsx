import { Routes, Route, Link } from "react-router-dom";

import "./app.css"
import Home from "./components/pages/Home/Home";
import Maker from "./components/pages/Maker/Maker";
import About from "./components/pages/About/About";
import Navbar from "./components/ui/NavBar/Navbar";
import React from "react";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/maker" element={<Maker />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  )
}
