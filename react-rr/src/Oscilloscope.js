import React, { useEffect, useRef } from 'react';

function RandomVisualizer({ isPlaying }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;
    let x = 0;
    const yValues = Array(canvas.width).fill(canvas.height / 2);

    // Function to draw the graph paper background
    const drawGrid = () => {
      context.fillStyle = 'lightgray';
      context.fillRect(0, 0, canvas.width, canvas.height);

      const gridSize = 0.05 * Math.min(window.innerWidth, window.innerHeight);
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
      context.lineWidth = 3;
      context.strokeStyle = 'red';

      for (let i = 0; i < canvas.width; i++) {
        context.lineTo(i, yValues[i]);
      }

      x++;
      yValues.shift();
      yValues.push(canvas.height / 3.5 + Math.random() * 300 - 10);

      context.stroke();

      if (x >= canvas.width) {
        x = 0;
      }

      if (isPlaying) {
        animationFrameId = requestAnimationFrame(randomData);
      }
    };

    randomData();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying]);

  // Set larger canvas dimensions
  const canvasWidth = 0.9 * window.innerWidth; // Adjust as needed
  const canvasHeight = 0.5 * window.innerHeight; // Adjust as needed

  return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
}

export default RandomVisualizer;
