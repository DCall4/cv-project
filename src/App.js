import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import './App.css';
import React, { Component } from "react";
import Mission from './components/Mission';

class App extends Component {
  render() {
    return (
      <div id="App">
          <Contact />
          <div className='leftPanel'>
            <Education />
            <Skills />
          </div>
          <div className='rightPanel'>
            <Mission />
            <Experience />
          </div>
      </div>
    )
  }
  
}

export default App;
