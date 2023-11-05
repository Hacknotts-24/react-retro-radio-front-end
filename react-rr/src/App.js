import './App.css';
import React, { useState } from 'react';
import LinkInputForm from './input';
import RandomVisualizer from './Oscilloscope'; // Adjust the import path as needed
import MyComponent from './logo'
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
        <div>
          <MyComponent></MyComponent>
        </div>
        <div className='visBorder'>
          <RandomVisualizer isPlaying={isPlaying}/>
        </div>
        <p>
        <LinkInputForm updateIsPlaying={updateIsPlaying} isPlaying={isPlaying}/>
        </p>
        <MenuButtons updateIsPlaying={updateIsPlaying}/>
      </header>
    </div>
  );
}

export default App;
