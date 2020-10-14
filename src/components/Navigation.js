import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import Tool from './Tool'


export default function Navigation() {
  return(
    <Navbar expand="lg">
      <Container fluid>
      <Navbar.Brand href="#home">
      <FontAwesomeIcon icon={faDesktop}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#link">Tutorial</Nav.Link>
          <Nav.Link href="#tool">Tool</Nav.Link>
        </Nav>

        <Switch>
          <Route path="/tool" exact component={Tool} />
        </Switch>
        
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}