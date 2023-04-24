import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from './Contact';
import "./App.css";

function App() {
    const path = window.location.pathname;
    return (
    <div>
        <Navbar />
        {path === '/contact' && <Contact />}
        <h1>Welcome to my Pulsed blog website!</h1>
        <Footer />
    </div>
    );
}

export default App;
