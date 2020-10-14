import React from 'react';
import Tilt from 'react-tilt';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function CaseTile({ id, name, imgUrl, maxCoolerHeight, maxGpuLength, maxGpuSlots, psuType, award, handleCaseClick, isFiltered, isSelected, handleCheckClick}) {
  return (
    <>
    <div className="case-container-item">
      <Tilt className="case" data-tilt style={ isFiltered ? { background: "rgba(197, 162, 31, 0.75)"} : '' }>
      <div className="Tilt-inner">
        {isSelected ? <FontAwesomeIcon icon={faCheckCircle} data-name={name} onClick={((e) => handleCheckClick(e, "case"))}  /> : '' }
        <img src={imgUrl} onClick={((e) => handleCaseClick(e))} data-name={name}></img>
        <p>{name}</p>
      </div>  
      </Tilt>
    </div>
    </>
  )
}