import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { faTools } from "@fortawesome/free-solid-svg-icons";
import Tool from './Tool'


class Navigation extends Tool {
  constructor(props) {
    super(props);
  }

  // [16/10/20] - Needs fixing, this.myRef is not correct, consider restructuring flow of navigation and TutorialCards components
  // handleFeaturesClick = () => {
  //   debugger;
  //   console.log(this.state.myRef[0])
  //   this.myRef[0].scrollIntoView(); 
  // }

  render() {
    return(
      <Navbar expand="lg">
        <Container fluid>
        <Navbar.Brand href="#home">
        <FontAwesomeIcon icon={faTools}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* [16/10/20] - Needs fixing, this.myRef is not correct, consider restructuring flow of Navigation and TutorialCards components */}
            {/* <Nav.Link href="#features" onClick={((e) => this.handleFeaturesClick())}>Features</Nav.Link> */} 
            <Nav.Link href="#features">Features</Nav.Link>
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
}

export default Navigation;