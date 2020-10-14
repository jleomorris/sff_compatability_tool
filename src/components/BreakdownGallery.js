import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";

export default function BreakdownGallery({ pcCase, cpuCooler, psu, gpu, handleExitClick, handleBackClick }) {
  return (
    <div class="wrapper">
      <FontAwesomeIcon icon={faTimes} onClick={(() => handleExitClick())} />
      <FontAwesomeIcon icon={faUndoAlt} onClick={(() => handleBackClick())}/>
      <h2>Breakdown</h2>

      <div class="clash-card barbarian">
        <div class="clash-card__image clash-card__image--barbarian">
          <img src={pcCase.imgUrl} alt="barbarian" />
        </div>
        <div class="clash-card__level clash-card__level--barbarian">Case</div>
        <div class="clash-card__unit-name">{pcCase.name}</div>
        <div class="clash-card__unit-description">
          The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.
        </div>

        <div class="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">

          <div class="full no-border">
            <div class="stat">{pcCase.maxCoolerHeight}cm</div>
            <div class="stat-value">max Cooler Height</div>
          </div>

          <div class="full">
            <div class="stat">{pcCase.maxGpuSlots}</div>
            <div class="stat-value"> max Gpu Slots</div>
          </div>

          <div class="full">
            <div class="stat">{pcCase.maxGpuLength}cm</div>
            <div class="stat-value">max Gpu Length</div>
          </div>

        </div>
      </div>

      <div class="clash-card barbarian">
        <div class="clash-card__image clash-card__image--barbarian">
          <img src={cpuCooler.imgUrl} alt="barbarian" />
        </div>
        <div class="clash-card__level clash-card__level--barbarian">CPU cooler</div>
        <div class="clash-card__unit-name">{cpuCooler.name}</div>
        <div class="clash-card__unit-description">
          The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.
        </div>

        <div class="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
          <div class="full">
            <div class="stat">{cpuCooler.height}cm</div>
            <div class="stat-value">Height</div>
          </div>

        </div>
      </div>

      <div class="clash-card barbarian">
        <div class="clash-card__image clash-card__image--barbarian">
          <img src={psu.imgUrl} alt="barbarian" />
        </div>
        <div class="clash-card__level clash-card__level--barbarian">PSU</div>
        <div class="clash-card__unit-name">{psu.name}</div>
        <div class="clash-card__unit-description">
          The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.
        </div>

        <div class="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
          <div class="full">
            <div class="stat">{psu.type}</div>
            <div class="stat-value">Type</div>
          </div>

        </div>
      </div>
     
      <div class="clash-card barbarian">
        <div class="clash-card__image clash-card__image--barbarian">
          <img src={gpu.imgUrl} alt="barbarian" />
        </div>
        <div class="clash-card__level clash-card__level--barbarian">GPU</div>
        <div class="clash-card__unit-name">{gpu.name}</div>
        <div class="clash-card__unit-description">
          The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.
        </div>

        <div class="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
          <div class="full">
            <div class="stat">{gpu.length}cm</div>
            <div class="stat-value">Length</div>
          </div>
          
          <div class="full">
            <div class="stat">{gpu.slots}</div>
            <div class="stat-value">Slots</div>
          </div>

        </div>
      </div>

    </div> 
  )
}