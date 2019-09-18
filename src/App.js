import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, SignupForm } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app_container">
        <img className="logo" src="img/logo.png" alt="logo" />
        <p className="date">Coming 06.26.19</p>
        <SignupForm />
      </div>
    </BrowserRouter>
  );
}

export default App;
