import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import './App.css';

function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Routes>
      {/* <Route element={<Home />} path="/" exact /> */}
      <Route element={<NasaPhoto />} path="/" exact />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
