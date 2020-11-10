import React from 'react';
import GpuTile from './GpuTile';

function GpuGallery({ gpus, handleGpuClick, handleGpuEyeHover, handleGpuEyeLeave, handleCheckClick }) {
  const gpuMap = (
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

  return (
    <>
      <h2>GPU</h2>
      {gpuMap}  
    </>
  )
}

export default GpuGallery;