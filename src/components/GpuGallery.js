import React from 'react';
import GpuTile from './GpuTile';

function GpuGallery({ gpus, handleGpuClick, handleGpuEyeHover, handleGpuEyeLeave, handleCheckClick }) {
  return (
    gpus.map(gpu => {
      return <GpuTile
                key={gpu.name} 
                name={gpu.name} 
                imgUrl={gpu.imgUrl}  
                handleGpuClick={handleGpuClick}
                handleGpuEyeHover={handleGpuEyeHover}
                handleGpuEyeLeave={handleGpuEyeLeave}
                handleCheckClick={handleCheckClick}
                isSelected={gpu.isSelected}
              />
    })
  )
}

export default GpuGallery;