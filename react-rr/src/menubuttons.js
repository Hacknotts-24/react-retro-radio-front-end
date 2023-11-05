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
      <button onClick={handlePauseClick}>Pause</button>
      <button onClick={handleResetClick}>Play</button>

      {/* <p>Pause: {pause.toString()}</p>
      <p>Play: {reset.toString()}</p> */}
    </div>
  );
};

export default MenuButtons;