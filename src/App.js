import React from "react";
import About from "./components/About";
import Home from "./components/home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Projects from "./components/Projects";
const App = () => {
  return (
    <div className="min-h-screen w-full bg-pr">
      <Header />
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
};

export default App;
