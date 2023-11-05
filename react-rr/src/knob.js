import React from 'react';
import imageSrc from './knob.png'; // Tell webpack this JS file uses this image

function Dial() {
  const altText = 'Kill me'; // Replace with the appropriate alt text

  return (
    <div>
      <img src={imageSrc} alt={altText} />
    </div>
  );
}

export default Dial;