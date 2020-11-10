import React from 'react';
import CpuCoolerTile from './CpuCoolerTile';

function CpuCoolerGallery({ cpuCoolers, handleCpuClick, handleCpuEyeHover, handleCpuEyeLeave, handleCheckClick }) {
  const cpuCoolersMap = (
    cpuCoolers.map(cpuCooler => {
      return <CpuCoolerTile
                key={cpuCooler.name} 
                name={cpuCooler.name} 
                imgUrl={cpuCooler.imgUrl}  
                handleCpuClick={handleCpuClick}
                handleCpuEyeHover={handleCpuEyeHover}
                handleCpuEyeLeave={handleCpuEyeLeave}
                isSelected={cpuCooler.isSelected}
                handleCheckClick={handleCheckClick}
              />
    })
  )
  return (
    <>
    <h2>CPU cooler</h2>
    {cpuCoolersMap}
    </>
  )
}

export default CpuCoolerGallery;