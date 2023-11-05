import React from 'react';
import imageSrc from './knob.png'; // Tell webpack this JS file uses this image

function Dial({volume, distortion}) {
  const altText = 'Kill me'; // Replace with the appropriate alt text

  return (
    <div>
      <img src={imageSrc} alt={altText} />
      <h3></h3>
    </div>
  );
}

export default Dial;