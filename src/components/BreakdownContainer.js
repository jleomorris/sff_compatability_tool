import React, { Component } from 'react';
import BreakdownGallery from './BreakdownGallery';
import Container from 'react-bootstrap/Container';

class BreakdownContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let heightToAdjustTo = document.querySelectorAll(".card-container")[0].offsetHeight;
    let mainContainerHeight = document.querySelectorAll(".main-container")[0].offsetHeight;

    if (mainContainerHeight > heightToAdjustTo) return;
    
    document.querySelectorAll(".main-container")[0].style.height = `${heightToAdjustTo}px`;
  }

  render() {
    // debugger;
    return (
      <Container fluid ref={this.props.uniqueRef} className="p-0 breakdown-container">
        {this.props.isCaseSelected 
          && 
          this.props.isCpuCoolerSelected 
          && 
          this.props.isPsuSelected 
          && 
          this.props.isGpuSelected 
          ? 
          <BreakdownGallery 
            pcCase={this.props.pcCase} 
            cpuCooler={this.props.cpuCooler} 
            psu={this.props.psu} 
            gpu={this.props.gpu}
            handleExitClick={this.props.handleExitClick}
            handleBackClick={this.props.handleBackClick}  
            handleCarouselDown={this.props.handleCarouselDown}
            handleCarouselUp={this.props.handleCarouselUp}
            filteredCpuCoolers={this.props.filteredCpuCoolers}
            filteredPsus={this.props.filteredPsus}
            filteredGpus={this.props.filteredGpus}
          /> 
          : ''
        }
      </Container> 
    )
  }
}

export default BreakdownContainer;