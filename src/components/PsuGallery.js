import React from 'react';
import PsuTile from './PsuTile';

function PsuGallery({ psus, handlePsuClick, handlePsuEyeHover, handlePsuEyeLeave, handleCheckClick }) {
  return (
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
}

export default PsuGallery;