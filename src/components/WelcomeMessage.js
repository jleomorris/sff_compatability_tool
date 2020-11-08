import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';


function WelcomeMessage() {
  return (
    <>
    <div className="hero-title-container">
      <h1 className="hero-title">SFF compatability tool.</h1>
    </div>
      <Jumbotron id="welcome-message">
            <Container fluid>
              {/* <Container fluid className="hero-title-container">
                <Row className="hero-container-row">
                </Row>
              </Container> */}
              <Row className="hero">
                {/* <h1 className="hero-title">SFF compatability tool.</h1> */}
                <Col xl={4} className="hero-content ml-md-5">
                  <h1>Welcome,</h1>
                  <p>I'm a junior front end developer and small form factor (SFF) PC enthusiast.</p>
                  <p>I've built this interactive compatability tool to replace the spreadsheets that all new SFF builders have to pour through to check part compatability.</p>
                  <p>Currently you can check the compatability of all listed CPU coolers, PSUs and GPUs based on case. I've excluded motherboard, CPU and RAM currently as these are the least dependent on case size.</p>
                  <ul>
                    <li>CPU coolers and filtered based on <span>height</span></li>
                    <li>PSUs are filtered based on <span>type</span></li>
                    <li>GPUs are filtered based on <span>length</span> and <span>slot width</span></li>
                  </ul>
                  <p>
                    This is a work in progress and I have many more features I'd like to add, these include:
                  </p>
                  <ul>
                    <li>Greater variety of components</li>
                    <li>Breakdown links to cheapest pricing for each component</li>
                    <li>Compatible RAM section</li>
                    <li>Compatible SSD/HDD section</li>
                  </ul>
                  <p>
                    If you have any feedback or suggestions please contact me below.
                  </p>
                  <p>
                    <Button variant="primary" className="contact-button" href="mailTo:james-morris2010@hotmail.co.uk">Contact me</Button>
                  </p>
                </Col>

                <Col xl={5} className="hero-image">
                  <div className="hero-image-circle"></div>
                  <img src="./img/kolink1.png"></img>
                </Col>
              </Row>

              <Row>
                <Col className="wave-container overlay">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#36003aa1" fillOpacity="1" d="M0,256L80,261.3C160,267,320,277,480,240C640,203,800,117,960,90.7C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                </Col>
              </Row>
            </Container>
      </Jumbotron>
    </>
  )
}

export default WelcomeMessage;