import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";

// The cards used below are based off Andre Madarangs clash of clan cards (https://codepen.io/drehimself/pen/QNXpyp)

function BreakdownGallery({ pcCase, cpuCooler, psu, gpu, handleExitClick, handleBackClick }) {
  // debugger;
  return (
    <div className="wrapper">
      <FontAwesomeIcon icon={faTimes} onClick={(() => handleExitClick())} />
      <FontAwesomeIcon icon={faUndoAlt} onClick={(() => handleBackClick())}/>
      <h2>Breakdown</h2>

      <Container fluid className="card-container">
        <div className="clash-card barbarian">
          <div className="clash-card__image clash-card__image--barbarian">
            <img src={pcCase.imgUrl} alt="barbarian" />
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

        <div className="clash-card barbarian">
          <div className="clash-card__image clash-card__image--barbarian">
            <img src={cpuCooler.imgUrl} alt="barbarian" />
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
            </div>

          </div>
        </div>

        <div className="clash-card barbarian">
          <div className="clash-card__image clash-card__image--barbarian">
            <img src={psu.imgUrl} alt="barbarian" />
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
            </div>

          </div>
        </div>
      
        <div className="clash-card barbarian">
          <div className="clash-card__image clash-card__image--barbarian">
            <img src={gpu.imgUrl} alt="barbarian" />
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
            </div>

          </div>
        </div>
      </Container>

    </div> 
  )
}

export default BreakdownGallery;