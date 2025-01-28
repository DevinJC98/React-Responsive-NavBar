import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar-Component/NavBar";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
