import React, {useState, useEffect} from "react";
import './App.css';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { About } from "./Components/About";
import { Bronx } from "./Components/Bronx";
import { Brooklyn } from "./Components/Brooklyn";
import { Home } from "./Components/Home";
import { Manhattan } from "./Components/Manhattan";
import { Queens } from "./Components/Queens";
import { StatenIsland} from "./Components/StatenIsland";
import { Review } from "./Components/Review"


function App() {
  return (

<BrowserRouter>
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Apartment Ratings</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as = {Link} to = "/home" >
              Home
              </Nav.Link>
            <Nav.Link as = {Link} to = "/about" >
              About
              </Nav.Link>
            <NavDropdown title="Boroughs" id="navbarScrollingDropdown">
             <NavDropdown.Item as = {Link} to = "/bronx" >
                Bronx
              </NavDropdown.Item>
                <NavDropdown.Divider /> 
              <NavDropdown.Item as = {Link} to = "/brooklyn" >
                Brooklyn
              </NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item as = {Link} to = "/manhattan" >
                Manhattan
              </NavDropdown.Item>
               <NavDropdown.Divider /> 
              <NavDropdown.Item as = {Link} to = "/queens" >
                Queens
              </NavDropdown.Item>
                <NavDropdown.Divider /> 
              <NavDropdown.Item as = {Link} to = "/staten island" >
                Staten Island
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as = {Link} to = "/review" >
              Write Your Own Review!
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <div>
        
          <Switch>
            <Route path = "/home" ><Home/></Route>
            <Route path = "/about" ><About/></Route>
            <Route path = "/bronx" ><Bronx/></Route>
            <Route path = "/brooklyn" ><Brooklyn/></Route>
            <Route path = "/manhattan" ><Manhattan/></Route>
            <Route path = "/queens" ><Queens/></Route>
            <Route path = "/staten island" ><StatenIsland/></Route>
            <Route path = "/review" ><Review/></Route>
          </Switch>
        
      </div>
    </div>
</BrowserRouter>
  );
}

export default App;
