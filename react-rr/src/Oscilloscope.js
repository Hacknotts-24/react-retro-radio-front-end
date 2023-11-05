import React, { useEffect, useRef } from 'react';

function RandomVisualizer({ isPlaying }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;

    // Function to draw the graph paper background
    const drawGrid = () => {
      context.fillStyle = 'lightgray';
      context.fillRect(0, 0, canvas.width, canvas.height);

      const gridSize = 0.05 * Math.min(window.innerWidth, window.innerHeight); // Set grid size as a percentage of the screen size
      context.strokeStyle = 'gray';

      for (let x = gridSize; x < canvas.width; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, canvas.height);
        context.stroke();
      }

      for (let y = gridSize; y < canvas.height; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(canvas.width, y);
        context.stroke();
      }
    };

    const randomData = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the graph paper background
      drawGrid();

      context.beginPath();
      context.lineWidth = 10; // Adjust line thickness for the red lines (make them thicker)
      context.strokeStyle = 'red';

      for (let x = 0; x < canvas.width; x += 20) {
        const y = Math.random() * canvas.height;
        context.lineTo(x, y);
      }

      context.stroke();

      context.lineWidth = 2; // Reset the line thickness for the grid lines

      if (isPlaying) {
        animationFrameId = requestAnimationFrame(randomData);
      }
    };

    randomData();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying]);

  // Set canvas dimensions as a percentage of the screen size
  const canvasWidth = 0.8 * window.innerWidth; // Adjust as needed
  const canvasHeight = 0.4 * window.innerHeight; // Adjust as needed

  return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
}

export default RandomVisualizer;
