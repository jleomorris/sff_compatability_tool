import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export default function WelcomeMessage() {
  return (
    <>
      <Jumbotron id="welcome-message">
          {/* <div className="hero"> */}
            <Container fluid>
              <Row className="hero">

                {/* Need to fix, autoplay doesn't work */}
                {/* <video src="./video/mixkit-welding-in-a-metal-factory-20910-medium.mp4" playsinline autoplay muted loop></video> */}

                <div className="hero-content col-lg-3">
                  
                  <h1>Welcome,</h1>
                  <p>
                    This is an interactive compatability tool to replace the spreadsheets that all new SFF builders have to pour through. With this tool you can minimize 
                    research time and rush straight through to assembly. Currently you can check the compatability of the listed GPUs, CPU coolers and PSUs based on case.  
                  </p>
                  <ul>
                    <li>GPUs are filtered based on length and slot width</li>
                    <li>CPU coolers and filtered based on height</li>
                    <li>PSUs are filtered based on type</li>
                  </ul>
                  <p>
                    This is a work in progress and I have many more features I'd like to add, these include:
                  </p>
                  <ul>
                    <li>Links to cheapest pricing for each component</li>
                    <li>Potentially add compatible RAM section</li>
                  </ul>
                  <p>
                    If you have any feedback or suggestions please contact me below.
                  </p>
                  <p>
                    <Button variant="primary">Learn more</Button>
                  </p>
                </div>

                <img className="col-lg-6" src="./img/multitasking.png"></img>

              </Row>
              <Row>
                <div className="col-12 wave-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#10c0bd" fill-opacity="1" d="M0,256L80,261.3C160,267,320,277,480,240C640,203,800,117,960,90.7C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                </div>
              </Row>
            </Container>
          {/* </div> */}
      </Jumbotron>
    </>
  )
}