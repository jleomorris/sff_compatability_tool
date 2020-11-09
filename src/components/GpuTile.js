import React from 'react';
import Tilt from 'react-tilt'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


function GpuTile({ id, name, imgUrl, maxCoolerHeight, maxGpuLength, maxGpuSlots, psuType, award, handleGpuClick, handleGpuEyeHover, handleGpuEyeLeave, handleCheckClick, isSelected }) {
  function handleClick(e) {
    handleGpuClick(e);
  }
  return (
    <>
    <div className="gpu-container-item">
      <Tilt className="gpu" data-tilt>
      <div className="Tilt-inner">
        {isSelected ? <FontAwesomeIcon icon={faCheckCircle} data-name={name} onClick={((e) => handleCheckClick(e, "gpu"))}  /> : '' }
        <FontAwesomeIcon icon={faEye} data-name={name} onMouseEnter={e => handleGpuEyeHover(e)} onMouseLeave={ e => handleGpuEyeLeave(e)} />
        <img src={process.env.PUBLIC_URL + imgUrl} data-name={name} onClick={((e) => handleClick(e))} ></img>
        <p>{name}</p>
      </div>  
      </Tilt>
    </div>
    </>
  )
}

export default GpuTile;