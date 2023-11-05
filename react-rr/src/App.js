import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import LinkInputForm from './input';
import RandomVisualizer from './Oscilloscope'; // Adjust the import path as needed

import MenuButtons from './menubuttons';

function App() {
  const [isPlaying, setIsPlaying] = useState(false); // State to store the returned title

  // Callback function to update the returned title state
  const updateIsPlaying = (bool) => {
    setIsPlaying(bool);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='visBorder'>
          <RandomVisualizer isPlaying={isPlaying}/>
        </div>
        <p>
        <LinkInputForm updateIsPlaying={updateIsPlaying} isPlaying={isPlaying}/>
        </p>
        <MenuButtons updateIsPlaying={updateIsPlaying}/>
        {knob()}
      </header>
    </div>
  );
}

function knob() {
  return (
    <div className="App-knob">
      <div id="burst-12"></div>
    </div>
  );
}

export default App;
