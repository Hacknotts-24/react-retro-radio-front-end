import React, { useState } from 'react';

const MenuButtons = () => {
  const [pause, setPause] = useState(false);
  const [reset, setReset] = useState(false);

  const handlePauseClick = () => {
    setPause(true);
    setReset(false); // Ensure reset is false when pausing
  };

  const handleResetClick = () => {
    setReset(true);
    setPause(false); // Ensure pause is false when resetting
  };

  return (
    <div>
      <button onClick={handlePauseClick}>Pause</button>
      <button onClick={handleResetClick}>Reset</button>

      <p>Pause: {pause.toString()}</p>
      <p>Reset: {reset.toString()}</p>
    </div>
  );
};

export default MenuButtons;