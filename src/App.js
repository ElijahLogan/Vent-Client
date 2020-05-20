import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem} from "react-bootstrap";
import { AppContext } from "./libs/contextLib";
import {  LinkContainer } from "react-router-bootstrap";

import { Auth } from "aws-amplify";
import React, { useState } from "react";
import Routes from "./Routes";
import "./App.css";



function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false)


async function handleLogout(){
  await Auth.signOut()
  
  userHasAuthenticated(false)
}

  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
  <Nav pullRight>
            {isAuthenticated
  ? <NavItem onClick={handleLogout}>Logout</NavItem>
  : <>
      <LinkContainer to="/signup">
        <NavItem>Signup</NavItem>
      </LinkContainer>
      <LinkContainer to="/login">
        <NavItem>Login</NavItem>
      </LinkContainer>
    </>
}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
   <AppContext.Provider value = {{ isAuthenticated, userHasAuthenticated }}>
      <Routes/>
   </AppContext.Provider>
    </div>
  );
}


export default App;



