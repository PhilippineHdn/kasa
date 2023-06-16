import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Kasa from './Pages/Kasa';
import "./styles/index.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Home/>} />
        <Route path="/kasa/:id" element={<Kasa />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
