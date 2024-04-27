import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Wrapper.css";
import { NavBar } from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import { Footer } from "./components/Footer";
import { Loader } from "./app/features/loader/Loader";

function Wrapper() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Loader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Wrapper;
