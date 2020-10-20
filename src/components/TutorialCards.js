import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import Tool from './Tool';

class TutorialCards extends Tool {  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Container fluid className="tutorial-container">
        <h2 id="features" ref={(ref) => { this.myRef[0] = ref }}>This tool makes matching components much easier.</h2>
        <div className="tutorial-container-text">Check out the features</div>
        <Container>
          <Row className="tutorial-card-container">
            <Col lg={3} className="tutorial-card" id="tutorial-card-1">
              <div className="tutorial-card-title">Filter compatible parts</div>
              <div className="tutorial-card-text">Click on a case and compatible CPU coolers, PSUs and GPUs will be automatically filtered.</div>
              <div className="icon-background">
                <FontAwesomeIcon icon={faFilter}/>
              </div>
            </Col>
            <Col lg={3} className="tutorial-card" id="tutorial-card-2">
              <div className="tutorial-card-title">Reverse filter according to part</div>
              <div className="tutorial-card-text">Hover over the eye icon to highlight compatible cases.</div>
              <div className="icon-background">
                <FontAwesomeIcon icon={faEye}/>
              </div>
            </Col>
            <Col lg={3} className="tutorial-card" id="tutorial-card-3">
              <div className="tutorial-card-title">Breakdown</div>
              <div className="tutorial-card-text">After selecting a case, cooler, GPU and PSU a breakdown will be shown displaying a detailed spec.</div>
              <div className="icon-background">
                <FontAwesomeIcon icon={faFileAlt}/>
              </div>
            </Col>
          </Row>
        </Container>
      
    </Container>
    )
  }
}

export default TutorialCards;