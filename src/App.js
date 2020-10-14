import React, { Fragment, Component } from 'react';
import Navigation from './components/Navigation';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import CaseGallery from './components/CaseGallery';
import CpuCoolerGallery from './components/CpuCoolerGallery';
import PsuGallery from './components/PsuGallery';
import GpuGallery from './components/GpuGallery';
import caseData from './json/cases.json';
import cpuCoolerData from './json/cpu_coolers.json';
import psuData from './json/psus.json';
import gpuData from './json/gpus.json';
import BreakdownGallery from './components/BreakdownGallery';
import BreakdownPrompt from './components/BreakdownPrompt'; 
import { faLessThanEqual, faLifeRing } from '@fortawesome/free-solid-svg-icons';
// import $ from 'jquery'
import WelcomeMessage from './components/WelcomeMessage';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Tool from './components/Tool';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import './styles/style.css';
import TutorialCards from './components/TutorialCards';
import Footer from './components/Footer';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <Navigation />
        <WelcomeMessage />
        <TutorialCards />
        <Tool />
        <Footer />
      </Router>
    );
  }
  
}

export default App;
