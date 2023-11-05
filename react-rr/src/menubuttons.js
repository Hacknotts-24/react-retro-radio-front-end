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

  const handleVolumeIncrease = () => {
    var audioElement = document.getElementById('mp3Audio');

    if (audioElement) {
      // Increase the volume by 10%
      audioElement.volume = Math.min(1, audioElement.volume + 0.1);
    }
  };

  const handleVolumeDecrease = () => {
    var audioElement = document.getElementById('mp3Audio');

    if (audioElement) {
      // Decrease the volume by 10%
      audioElement.volume = Math.max(0, audioElement.volume - 0.1);
    }
  };

  return (
    <div>
      <button className="btnn" onClick={handlePauseClick}>⏸</button>
      <button className="btnn" onClick={handlePlayClick}>▶</button>
      <button className="btnn" onClick={handleResetClick}>↺</button>
      <button className="btnn" onClick={handleVolumeIncrease}>🔊</button>
      <button className="btnn" onClick={handleVolumeDecrease}>🔉</button>
    </div>
  );
};

export default MenuButtons;