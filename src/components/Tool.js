import React, { Fragment, Component } from 'react';
// import './App.css';
import CaseGallery from './CaseGallery';
import CpuCoolerGallery from './CpuCoolerGallery';
import PsuGallery from './PsuGallery';
import GpuGallery from './GpuGallery';
import caseData from '../json/cases.json';
import cpuCoolerData from '../json/cpu_coolers.json';
import psuData from '../json/psus.json';
import gpuData from '../json/gpus.json';
import BreakdownGallery from './BreakdownGallery';
import BreakdownPrompt from './BreakdownPrompt'; 
import Container from 'react-bootstrap/Container';
// import { faLessThanEqual, faLifeRing } from '@fortawesome/free-solid-svg-icons';
// import $ from 'jquery'
// import './styles/style.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



class Tool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: [],
      cpuCoolers: [],
      psus: [],
      gpus: [],
      originalCpuCoolers: [],
      originalPsus: [],
      originalGpus: [],
      isCaseSelected: false,
      isCpuCoolerSelected: false,
      isPsuSelected: false,
      isGpuSelected: false,
      selectedCase: null,
      selectedCpuCooler: null,
      selectedPsu: null,
      selectedGpu: null,
      isbreakdownContainerReset: false
    }
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleCaseClick = this.handleCaseClick.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.handleCpuClick = this.handleCpuClick.bind(this);
    this.handlePsuClick = this.handlePsuClick.bind(this);
    this.handleGpuClick = this.handleGpuClick.bind(this);
    this.handleCpuEyeHover = this.handleCpuEyeHover.bind(this);
    this.resetCaseTiles = this.resetCaseTiles.bind(this);
    this.handlePsuEyeHover = this.handlePsuEyeHover.bind(this);
    this.handleGpuEyeHover = this.handleGpuEyeHover.bind(this);
    this.resetAll = this.resetAll.bind(this);
    this.myRef = [];
  }

  componentDidMount() {
    this.setState({
      cases: caseData.cases,
      originalCases: caseData.cases,
      cpuCoolers: cpuCoolerData.cpuCoolers,
      originalCpuCoolers: cpuCoolerData.cpuCoolers,
      psus: psuData.psus,
      originalPsus: psuData.psus,
      gpus: gpuData.gpus,
      originalGpus: gpuData.gpus,
    })
  }

  handleCaseClick(e) {
    const selectedCaseName = e.target.dataset.name;
    // Remove tick icon from all cases
    const unselectedCases = this.state.cases.map(pcCase => pcCase.isSelected === true ? { ...pcCase, isSelected: false } : pcCase ); 
    // Tick selected case
    const selectedCases = unselectedCases.map(pcCase => pcCase.name === selectedCaseName ? { ...pcCase, isSelected: true } : pcCase );

    // Display cases, reset cpu coolers, psus and gpus to original lists
    this.setState({ cases: selectedCases, cpuCoolers: this.state.originalCpuCoolers, psus: this.state.originalPsus, gpus: this.state.originalGpus, isCaseSelected: false, selectedCaseName: null, isCpuCoolerSelected: false, selectedCpuCoolerName: null, isPsuSelected: false, selectedPsuName: null, isGpuSelected: false, selectedGpuName: null, isbreakdownContainerReset: false }, () => {
      // Filter cpu coolers, psus and gpus based on selected case
      const filteredCase = this.state.cases.filter(pcCase => pcCase.name === selectedCaseName)[0];
      const filteredCpuCoolers = this.state.cpuCoolers.filter(cooler => cooler.height <= filteredCase.maxCoolerHeight);
      const filteredPsus = this.state.psus.filter(psu => psu.type === filteredCase.psuType);
      const filteredGpus = this.state.gpus.filter(gpu => gpu.length <= filteredCase.maxGpuLength)
      
      // Display filtered cpu coolers, psus and gpus
      this.setState({ cases: selectedCases, cpuCoolers: filteredCpuCoolers, psus: filteredPsus, gpus: filteredGpus, isCaseSelected: true, selectedCase: filteredCase });
      // this.scrollToCpus();
      
    })
          
  }

  resetAll() {
    this.setState({ cases: this.state.originalCases, cpuCoolers: this.state.originalCpuCoolers, psus: this.state.originalPsus, gpus: this.state.originalGpus, isCaseSelected: false,
      isCpuCoolerSelected: false, isPsuSelected: false, isGpuSelected: false, selectedCaseName: null, selectedCpuCoolerName: null, selectedPsuName: null, selectedGpuName: null, breakdownContainerEnabled: false
    });
  }

  handleBackClick() {
    this.setState({ isbreakdownContainerReset: true });
  }
        
  handleCheckClick(e, target) {
    if(target==="case") {
      const selectedCase = e.currentTarget.dataset.name;
      const unselectedCases = this.state.cases.map(pcCase => pcCase.isSelected === true ? { ...pcCase, isSelected: false } : pcCase );
      this.setState({ cases: unselectedCases, 
                      cpuCoolers: this.state.originalCpuCoolers,
                      psus: this.state.originalPsus,
                      gpus: this.state.originalGpus,
                      isCaseSelected: false,
                      selectedCaseName: null,
                      isCpuCoolerSelected: false,
                      selectedCpuCoolerName: null,
                      isPsuSelected: false,
                      selectedPsuName: null,
                      isGpuSelected: false,
                      selectedGpuName: null,
                      isbreakdownContainerReset: false
                    });
    }else if(target==="cpu") {
      const selectedCpuCooler = e.currentTarget.dataset.name;
      const unselectedCpuCoolers = this.state.cpuCoolers.map(cooler => cooler.isSelected === true ? { ...cooler, isSelected: false } : cooler );
      this.setState({ cpuCoolers: unselectedCpuCoolers, isCpuCoolerSelected: false, selectedCpuCoolerName: null, isbreakdownContainerReset: false });
    }else if(target==="psu") {
      const selectedPsu = e.currentTarget.dataset.name;
      const unselectedPsus = this.state.psus.map(psu => psu.isSelected === true ? { ...psu, isSelected: false } : psu );
      this.setState({ psus: unselectedPsus, isPsuSelected: false, selectedPsuName: null, isbreakdownContainerReset: false });
    }else if(target="gpu") {
      const selectedGpu = e.currentTarget.dataset.name;
      const unselectedGpus = this.state.gpus.map(gpu => gpu.isSelected === true ? { ...gpu, isSelected: false } : gpu );
      this.setState({ gpus: unselectedGpus, isGpuSelected: false, selectedGpuName: null, isbreakdownContainerReset: false });
    }

  }

  handleCpuClick(e) {
    if(this.state.isCpuCoolerSelected || !this.state.isCaseSelected) return;

    const selectedCpuCoolerName = e.target.dataset.name;
    // Enable tick icon for clicked cpu
    const selectedCpuCoolers = this.state.cpuCoolers.map(cooler => cooler.name===selectedCpuCoolerName ? { ...cooler, isSelected: true } : cooler);    
    const filteredCpuCooler = this.state.cpuCoolers.filter(cooler => cooler.name === selectedCpuCoolerName)[0];
    
    // Show tick icon
    this.setState({ cpuCoolers: selectedCpuCoolers, isCpuCoolerSelected: true, selectedCpuCooler: filteredCpuCooler });
  }
  
  handlePsuClick(e) {
    if(this.state.isPsuSelected || !this.state.isCaseSelected) return;
    const selectedPsuName = e.target.dataset.name;
    const selectedPsus = this.state.psus.map(psu => psu.name===selectedPsuName ? { ...psu, isSelected: true } : psu);
    const filteredPsu = this.state.psus.filter(psu => psu.name === selectedPsuName)[0];
    
    this.setState({ psus: selectedPsus, isPsuSelected: true, selectedPsu: filteredPsu });
  }
  
  handleGpuClick(e) {
    if(this.state.isGpuSelected || !this.state.isCaseSelected) return;
    const selectedGpuName = e.target.dataset.name;
    const selectedGpus = this.state.gpus.map(gpu => gpu.name===selectedGpuName ? { ...gpu, isSelected: true } : gpu);
    const filteredGpu = this.state.gpus.filter(gpu => gpu.name === selectedGpuName)[0];
    
    this.setState({ gpus: selectedGpus, isGpuSelected: true, selectedGpu: filteredGpu });
  }

  handleCpuEyeHover(e) {
    const highlightCases = (selectedCpuCoolerName) => {
      const filteredCpuCooler = this.state.cpuCoolers.filter(cooler => cooler.name === selectedCpuCoolerName)[0];
      const compatibleCases = this.state.cases.map(pcCase => pcCase.maxCoolerHeight >= filteredCpuCooler.height ? { ...pcCase, isFiltered: !pcCase.isFiltered } : pcCase );
      
      this.setState( {cases: compatibleCases} )
    }
    
    if(e.target.nodeName === "svg") {
      let selectedCpuCoolerName = e.target.dataset.name;
      highlightCases(selectedCpuCoolerName);
    }else if(e.target.nodeName === "path") {
      let selectedCpuCoolerName = e.target.parentElement.dataset.name;
      highlightCases(selectedCpuCoolerName);
    }
  }

  resetCaseTiles(e) {
    const resetCases = this.state.cases.map(pcCase => pcCase.isFiltered === true ? { ...pcCase, isFiltered: false } : pcCase );
    this.setState( {cases: resetCases} );
  }

  handlePsuEyeHover(e) {
    const highlightPsus = (selectedPsuName) => {
      const filteredPsu = this.state.psus.filter(psu => psu.name === selectedPsuName)[0];
      // debugger;
      const compatibleCases = this.state.cases.map(pcCase => pcCase.psuType === filteredPsu.type ? { ...pcCase, isFiltered: !pcCase.isFiltered } : pcCase );
      
      this.setState( {cases: compatibleCases} )
    }
    
    if(e.target.nodeName === "svg") {
      let selectedPsuName = e.target.dataset.name;
      highlightPsus(selectedPsuName);
    }else if(e.target.nodeName === "path") {
      let selectedPsuName = e.target.parentElement.dataset.name;
      highlightPsus(selectedPsuName);
    }
  }

  handleGpuEyeHover(e) {
    const highlightGpus = (selectedGpuName) => {
      const filteredGpu = this.state.gpus.filter(gpu => gpu.name === selectedGpuName)[0];
      const compatibleCases = this.state.cases.map(pcCase => pcCase.maxGpuLength >= filteredGpu.length ? { ...pcCase, isFiltered: !pcCase.isFiltered } : pcCase );
      
      this.setState( {cases: compatibleCases} )
    }
    
    if(e.target.nodeName === "svg") {
      let selectedGpuName = e.target.dataset.name;
      highlightGpus(selectedGpuName);
    }else if(e.target.nodeName === "path") {
      let selectedGpuName = e.target.parentElement.dataset.name;
      highlightGpus(selectedGpuName);
    }

  }

  // scrollToCpus = (event) => {
  //   console.log(this.myRef[0])
  //   this.myRef[0].scrollIntoView(); 
  // }

  // scrollToPsus = (event) => {
  //   console.log(this.myRef[1])
  //   this.myRef[1].scrollIntoView(); 
  // }

  // scrollToGpus = (event) => {
  //   console.log(this.myRef[2])
  //   this.myRef[2].scrollIntoView(); 
  // }

  // scrollToBreakdown = (event) => {
  //   console.log(this.myRef[3])
  //   this.myRef[3].scrollIntoView(); 
  // }

  render() {
    const breakdownGallery = (
      <>
        <BreakdownGallery 
          pcCase={this.state.selectedCase} 
          cpuCooler={this.state.selectedCpuCooler} 
          psu={this.state.selectedPsu} 
          gpu={this.state.selectedGpu}
          handleExitClick={this.resetAll}
          handleBackClick={this.handleBackClick}
        />
      </>
    );

    const defaultSelectMessage = (
      <h3>Select a <span>case</span>, <span>CPU cooler</span>, <span>PSU</span> and <span>GPU</span> to see breakdown.</h3>
    )

    const breakdownContainer = (
      <div ref={(ref) => { this.myRef[3] = ref }} className="breakdown-container">
        {this.state.isCaseSelected && this.state.isCpuCoolerSelected && this.state.isPsuSelected && this.state.isGpuSelected ? breakdownGallery : ''}
      </div>
    );

    return (
          <>
            {/* {defaultSelectMessage} */}

            <div className="wave-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#10c0bd" fill-opacity="1" d="M0,64L80,90.7C160,117,320,171,480,160C640,149,800,75,960,48C1120,21,1280,43,1360,53.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>

            <div className="main-container">
              {/* <h2>Case</h2> */}

              <div className="case-container">
                <CaseGallery cases={this.state.cases} handleCaseClick={this.handleCaseClick} handleCheckClick={this.handleCheckClick} />
              </div>

              {/* <h2 ref={(ref) => { this.myRef[0] = ref }}>CPU cooler</h2> */}

              <div className="cpu-cooler-container">
                <CpuCoolerGallery cpuCoolers={this.state.cpuCoolers} handleCpuClick={this.handleCpuClick} handleCpuEyeHover={this.handleCpuEyeHover} handleCpuEyeLeave={this.resetCaseTiles} handleCheckClick={this.handleCheckClick} />
              </div>

              {/* <h2 ref={(ref) => { this.myRef[1] = ref }}>PSU</h2> */}

              <div className="psu-container">
                <PsuGallery psus={this.state.psus} handlePsuClick={this.handlePsuClick} handlePsuEyeHover={this.handlePsuEyeHover} handlePsuEyeLeave={this.resetCaseTiles} handleCheckClick={this.handleCheckClick} />
              </div>

              {/* <h2 ref={(ref) => { this.myRef[2] = ref }}>GPU</h2> */}

              <div className="gpu-container">
                <GpuGallery gpus={this.state.gpus} handleGpuClick={this.handleGpuClick} handleGpuEyeHover={this.handleGpuEyeHover} handleGpuEyeLeave={this.resetCaseTiles} handleCheckClick={this.handleCheckClick} />
              </div>

              {this.state.isCaseSelected && this.state.isCpuCoolerSelected && this.state.isPsuSelected && this.state.isGpuSelected && !this.state.isbreakdownContainerReset ? breakdownContainer : ''}
            </div>

          </>
      
    );
  }

}

export default Tool;
