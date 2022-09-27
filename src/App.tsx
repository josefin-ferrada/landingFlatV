import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./Components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="sendForm" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
