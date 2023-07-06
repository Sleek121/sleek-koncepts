import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Subscribe from "./components/Subscribe";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <About />
    <Subscribe />
    <Cards />
    <Footer />
    </div>
  );
}

export default App;
