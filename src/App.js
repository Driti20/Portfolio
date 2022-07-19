import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./share/Loading/Loading";
const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Portfolio = lazy(() => import("./Pages/Portfolio/Portfolio"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));


function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Portfolio" element={<Portfolio />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
   
      </Suspense>
    </Router>
  );
}

export default App;
