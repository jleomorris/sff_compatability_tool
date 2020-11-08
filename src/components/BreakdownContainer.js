import React, { Component } from 'react';
import BreakdownGallery from './BreakdownGallery';

class BreakdownContainer extends Component {
// class BreakdownContainer extends component ({ cases, handleCaseClick, handleCheckClick }) {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const breakdownContainerHeight = document.querySelectorAll(".breakdown-container")[0].offsetHeight;
    // console.log(breakdownContainerHeight);
  }

  render() {
    // debugger;
    return (
      <div ref={this.props.uniqueRef} className="breakdown-container">
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
          /> 
          : ''
        }
      </div>
    )
  }
}

export default BreakdownContainer;