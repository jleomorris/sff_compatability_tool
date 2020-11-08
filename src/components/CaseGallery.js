import React from 'react';
import CaseTile from './CaseTile';

function CaseGallery({ cases, handleCaseClick, handleCheckClick }) {
  return (
    cases.map(PcCase => {
      return <CaseTile 
                key={PcCase.name} 
                id={PcCase.id}
                name={PcCase.name} 
                imgUrl={PcCase.imgUrl}  
                maxCoolerHeight={PcCase.maxCoolerHeight}
                maxGpuLength={PcCase.maxGpuLength}
                maxGpuSlots={PcCase.maxGpuSlots}
                psuType={PcCase.psuType}
                award={PcCase.awards}
                handleCaseClick={handleCaseClick}
                isFiltered={PcCase.isFiltered}
                isSelected={PcCase.isSelected}
                handleCheckClick={handleCheckClick}
              />
    })
  )
}

export default CaseGallery;