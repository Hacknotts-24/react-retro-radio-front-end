import React, { useState } from 'react';

const MenuButtons = ({ updateIsPlaying }) => {
  const [pause, setPause] = useState(false);
  const [reset, setReset] = useState(false);

  const handlePauseClick = () => {
    setPause(true);
    updateIsPlaying(false);
    setReset(false); // Ensure reset is false when pausing
  };

  const handleResetClick = () => {
    setReset(true);
    updateIsPlaying(true);
    setPause(false); // Ensure pause is false when resetting
  };

  return (
    <div>
      <button className="btnn" onClick={handlePauseClick}>⏸</button>
      <button className="btnn" onClick={handleResetClick}>▶</button>
    </div>
  );
};

export default MenuButtons;