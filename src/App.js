import React from 'react';
import i18n from './i18n';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Kasa from './Pages/Kasa';
import About from './Pages/About';
import Error from './Pages/Error';
import "./styles/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Error/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/kasa/:id" element={<Kasa />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
