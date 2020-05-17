import React from "react";
import { Link } from "react-router-dom";
import Routes from "./Routes";
import { Navbar } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Vent</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;