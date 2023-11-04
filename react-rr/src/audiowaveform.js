import React, { useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';

function AudioWaveform() {
  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'rgb(200, 0, 200)',
      progressColor: 'rgb(100, 0, 100)',
      renderFunction: (channels, ctx) => {
      },
    });

    // Load an audio file dynamically
    wavesurfer.load('/path/to/your/audio/file.mp3'); // Replace 

    wavesurfer.on('interaction', () => {
      wavesurfer.play();
    });

    // Cleanup on unmount
    return () => {
      wavesurfer.destroy();
    };
  }, []);

  return (
    <div className="AudioWaveform">
      <div id="waveform"></div>
    </div>
  );
}

export default AudioWaveform;
