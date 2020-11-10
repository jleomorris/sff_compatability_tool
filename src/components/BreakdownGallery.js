import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUndoAlt, faSortUp, faSortDown, faLock } from "@fortawesome/free-solid-svg-icons";

// The cards used below are based off Andre Madarangs clash of clan cards (https://codepen.io/drehimself/pen/QNXpyp)

function BreakdownGallery({ pcCase, cpuCooler, psu, gpu, handleExitClick, handleBackClick, handleCarouselDown, handleCarouselUp, filteredCpuCoolers, filteredPsus, filteredGpus }) {
  return (
    <div className="wrapper">
      <FontAwesomeIcon icon={faTimes} onClick={(() => handleExitClick())} />
      <FontAwesomeIcon icon={faUndoAlt} onClick={(() => handleBackClick())}/>
      <h2>Breakdown</h2>

      <Container fluid className="card-container">
        <Row className="align-items-md-start">
          <Col md={3} xs={6} className="d-flex justify-content-center mt-5 mb-5">
            <div className="clash-card barbarian">
            <div className="carousel-up-container">
                <FontAwesomeIcon icon={faLock}/>
              </div>
              <div className="clash-card__image clash-card__image--barbarian">
                {/* <img src={pcCase.imgUrl} alt="pc case" /> */}
                <img src={process.env.PUBLIC_URL + pcCase.imgUrl} alt="pc case" />
              </div>
              <div className="clash-card__level clash-card__level--barbarian">Case</div>
              <div className="clash-card__unit-name">{pcCase.name}</div>
              <div className="clash-card__unit-description">
                <p className="case-quote">{pcCase.description ? `"${pcCase.description}"` : 'No description'}</p>
                <p className="case-quote-author">{pcCase.descriptionAuthor ? `- ${pcCase.descriptionAuthor}` : 'No author'}</p>
              </div>

              <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">

                <div className="full no-border">
                  <div className="stat">{pcCase.maxCoolerHeight}cm</div>
                  <div className="stat-value">max Cooler Height</div>
                </div>

                <div className="full">
                  <div className="stat">{pcCase.maxGpuSlots}</div>
                  <div className="stat-value"> max Gpu Slots</div>
                </div>

                <div className="full">
                  <div className="stat">{pcCase.maxGpuLength}cm</div>
                  <div className="stat-value">max Gpu Length</div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6} className="d-flex justify-content-center mt-5 mb-5">
            <div className="clash-card barbarian">
              <div className="carousel-up-container">
                <FontAwesomeIcon icon={faSortUp} onClick={() => { handleCarouselUp("cpuCooler") }}/>
              </div>
              <div className="clash-card__image clash-card__image--barbarian">
                {/* <img src={cpuCooler.imgUrl} alt="cpu cooler" /> */}
                <img src={process.env.PUBLIC_URL + cpuCooler.imgUrl} alt="cpu cooler" />
              </div>
              <div className="clash-card__level clash-card__level--barbarian">CPU cooler</div>
              <div className="clash-card__unit-name">{cpuCooler.name}</div>
              <div className="clash-card__unit-description">
                <p className="case-quote">{cpuCooler.description ? `"${cpuCooler.description}"` : 'No description'}</p>
                <p className="case-quote-author">{cpuCooler.descriptionAuthor ? `- ${cpuCooler.descriptionAuthor}` : 'No author'}</p>         
              </div>
              <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                <div className="full">
                  <div className="stat">{cpuCooler.height}cm</div>
                  <div className="stat-value">Height</div>
                  <div className="cpu-cooler-number-label">{`${filteredCpuCoolers.indexOf(cpuCooler) + 1} of ${filteredCpuCoolers.length}`}</div>
                </div>
              </div>
              <div className="carousel-down-container">
                <FontAwesomeIcon icon={faSortDown} onClick={() => { handleCarouselDown("cpuCooler") }}/>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6} className="d-flex justify-content-center mt-5 mb-5">
            <div className="clash-card barbarian">
              <div className="carousel-up-container">
                <FontAwesomeIcon icon={faSortUp} onClick={() => { handleCarouselUp("psu") }}/>
              </div>
              <div className="clash-card__image clash-card__image--barbarian">
                {/* <img src={psu.imgUrl} alt="psu" /> */}
                <img src={process.env.PUBLIC_URL + psu.imgUrl} alt="psu" />
              </div>
              <div className="clash-card__level clash-card__level--barbarian">PSU</div>
              <div className="clash-card__unit-name">{psu.name}</div>
              <div className="clash-card__unit-description">
                <p className="case-quote">{psu.description ? `"${psu.description}"` : 'No description'}</p>
                <p className="case-quote-author">{psu.descriptionAuthor ? `- ${psu.descriptionAuthor}` : 'No author'}</p>  
              </div>
              <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                <div className="full">
                  <div className="stat">{psu.type}</div>
                  <div className="stat-value">Type</div>
                  <div className="cpu-cooler-number-label">{`${filteredPsus.indexOf(psu) + 1} of ${filteredPsus.length}`}</div>
                </div>
              </div>
              <div className="carousel-down-container">
                <FontAwesomeIcon icon={faSortDown} onClick={() => { handleCarouselDown("psu") }}/>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6} className="d-flex justify-content-center mt-5 mb-5">
            <div className="clash-card barbarian">
              <div className="carousel-up-container">
                <FontAwesomeIcon icon={faSortUp} onClick={() => { handleCarouselUp("gpu") }}/>
              </div>
              <div className="clash-card__image clash-card__image--barbarian">
                {/* <img src={gpu.imgUrl} alt="gpu" /> */}
                <img src={process.env.PUBLIC_URL + gpu.imgUrl} alt="gpu" />
              </div>
              <div className="clash-card__level clash-card__level--barbarian">GPU</div>
              <div className="clash-card__unit-name">{gpu.name}</div>
              <div className="clash-card__unit-description">
                <p className="case-quote">{gpu.description ? `"${gpu.description}"` : 'No description'}</p>
                <p className="case-quote-author">{gpu.descriptionAuthor ? `- ${gpu.descriptionAuthor}` : 'No author'}</p>
              </div>
              <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                <div className="full">
                  <div className="stat">{gpu.length}cm</div>
                  <div className="stat-value">Length</div>
                </div>
                
                <div className="full">
                  <div className="stat">{gpu.slots}</div>
                  <div className="stat-value">Slots</div>
                  <div className="cpu-cooler-number-label">{`${filteredGpus.indexOf(gpu) + 1} of ${filteredGpus.length}`}</div>
                </div>
              </div>
              <div className="carousel-down-container">
                <FontAwesomeIcon icon={faSortDown} onClick={() => { handleCarouselDown("gpu") }}/>
              </div>
            </div>
          </Col>
        </Row>



      

      </Container>

    </div> 
  )
}

export default BreakdownGallery;