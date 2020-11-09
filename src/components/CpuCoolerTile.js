import React from 'react';
import Tilt from 'react-tilt'
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function CpuCoolerTile({ id, name, imgUrl, maxCoolerHeight, maxGpuLength, maxGpuSlots, psuType, award, handleCpuClick, handleCpuEyeHover, handleCpuEyeLeave, isSelected, handleCheckClick }) {
  return (
    <>
    <div className="cpu-cooler-container-item">
      <Tilt className="cpu-cooler" data-tilt>
      <div className="Tilt-inner">
        {isSelected ? <FontAwesomeIcon icon={faCheckCircle} data-name={name} onClick={((e) => handleCheckClick(e, "cpu"))}  /> : '' }
        <FontAwesomeIcon icon={faEye} data-name={name} onMouseEnter={e => handleCpuEyeHover(e)} onMouseLeave={ e => handleCpuEyeLeave(e)} />
        <img src={process.env.PUBLIC_URL + imgUrl} data-name={name} onClick={((e) => handleCpuClick(e))}></img>
        <p>{name}</p>
      </div>  
      </Tilt>
    </div>
    </>
  )
}

export default CpuCoolerTile;