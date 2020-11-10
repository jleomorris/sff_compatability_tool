import React from 'react';
import PsuTile from './PsuTile';

function PsuGallery({ psus, handlePsuClick, handlePsuEyeHover, handlePsuEyeLeave, handleCheckClick }) {
  const psuMap = (
    psus.map(psu => {
      return <PsuTile
                key={psu.name} 
                name={psu.name} 
                imgUrl={psu.imgUrl}  
                handlePsuClick={handlePsuClick}
                handlePsuEyeHover={handlePsuEyeHover}
                handlePsuEyeLeave={handlePsuEyeLeave}
                handleCheckClick={handleCheckClick}
                isSelected={psu.isSelected}
              />
    })
  )
  return (
    <>
      <h2>PSU</h2>
      {psuMap}  
    </>
  )
}

export default PsuGallery;