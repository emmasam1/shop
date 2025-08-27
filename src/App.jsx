// import { useState } from 'react'
import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/home/Home";
import Bags from "./pages/bags/Bags";
import Bedroom from "./pages/bedroom/Bedroom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/bedding" element={<Bedroom />} />
      </Routes>
    </>
  );
}

export default App;
