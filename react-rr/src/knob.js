import React, { useState } from 'react';
import imageSrc from './knob.png'; // Tell webpack this JS file uses this image

function Dial(steps) {
  const altText = 'Dial'; // Replace with the appropriate alt text
  const [rotation, setRotation] = useState(53);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);

    if ((counter + 1) >= steps.steps) {  
      setCounter(0);
    }

    console.log(steps.steps);
    console.log(`Component Clicked: ${counter}`); // You can replace this with your desired action
  };

  return (
    <div onClick={handleClick}>
      <div
        style={{
          transform: `rotate(${rotation + (180/steps) * counter})`, // Apply the rotation transform
        }}
      ></div>
      <img src={imageSrc} alt={altText} />
    </div>
  );
}

export default Dial;