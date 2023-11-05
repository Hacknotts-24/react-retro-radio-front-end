import React, { useState } from 'react';

const MenuButtons = ({ updateIsPlaying }) => {
  const [pause, setPause] = useState(false);
  const [reset, setReset] = useState(false);

  const handlePauseClick = () => {
    setPause(true);
    updateIsPlaying(false);
    setReset(false); // Ensure reset is false when pausing
  };

  const handlePlayClick = () => {
    setReset(true);
    updateIsPlaying(true);
    setPause(false); // Ensure pause is false when resetting
  };

  const handleResetClick = () => {
    var audioElement = document.getElementById('mp3Audio');

    if (audioElement) {
      // If it exists, reset the current time to 00:00
      audioElement.currentTime = 0;
      setReset(true);
      updateIsPlaying(true);
      setPause(false); // Ensure pause is false when resetting
    }
  }

  return (
    <div>
      <button className="btnn" onClick={handlePauseClick}>⏸</button>
      <button className="btnn" onClick={handlePlayClick}>▶</button>
      <button className="btnn" onClick={handleResetClick}>↺</button>
    </div>
  );
};

export default MenuButtons;