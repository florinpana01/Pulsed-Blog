import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from './Contact';
import "./App.css";
import Home from "./Home";

function App() {
    const path = window.location.pathname;
    return (
    <div>
        <Navbar />
        {path === '/contact' && <Contact />}
        {path === '/home' && <Home />}
        {path === '/' && <Home/>}
        {/*<Footer />*/}
    </div>
    );
};

export default App;
