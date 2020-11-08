import React from 'react';
import Tilt from 'react-tilt'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


function PsuTile({ id, name, imgUrl, maxCoolerHeight, maxGpuLength, maxGpuSlots, psuType, award, handlePsuClick, handlePsuEyeHover, handlePsuEyeLeave, isSelected, handleCheckClick}) {
  return (
    <>
    <div className="psu-container-item">
      <Tilt className="psu" data-tilt>
      <div className="Tilt-inner">
        {isSelected ? <FontAwesomeIcon icon={faCheckCircle} data-name={name} onClick={((e) => handleCheckClick(e, "psu"))}  /> : '' }
        <FontAwesomeIcon icon={faEye} data-name={name} onMouseEnter={e => handlePsuEyeHover(e)} onMouseLeave={e => handlePsuEyeLeave(e)}/>
        <img src={imgUrl} data-name={name} onClick={((e) => handlePsuClick(e))}></img>
        <p>{name}</p>
      </div>  
      </Tilt>
    </div>
    </>
  )
}

export default PsuTile;