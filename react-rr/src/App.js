import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import LinkInputForm from './input';
import RandomVisualizer from './Oscilloscope'; // Adjust the import path as needed


function App() {
  const [isPlaying, setIsPlaying] = useState(false); // State to store the returned title

  // Callback function to update the returned title state
  const updateIsPlaying = (bool) => {
    setIsPlaying(bool);
  };

  return (
    <div className="App">
      <header className="App-header">
        <RandomVisualizer isPlaying={isPlaying}/>
        <p>
        <LinkInputForm updateIsPlaying={updateIsPlaying}/>
        </p>
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
