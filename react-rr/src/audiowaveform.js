import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import 'wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js';

function AudioWaveform() {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: 'violet',
      progressColor: 'purple',
      backend: 'MediaElement', // You can specify the backend to handle audio playback
      mediaControls: true, // Enable media controls for the audio element
      // Add other options as needed
    });

    // Load your audio file (update the URL to your audio file)
    wavesurfer.current.load('/file_example_MP3_1MG.mp3');

    // Custom rendering function
    wavesurfer.current.on('ready', () => {
      wavesurfer.current.setRenderer((channels, ctx) => {
        // Add your custom rendering function code here
        const { width, height } = ctx.canvas;
        const scale = channels[0].length / width;
        const step = 10;

        ctx.translate(0, height / 2);
        ctx.strokeStyle = ctx.fillStyle;
        ctx.beginPath();

        for (let i = 0; i < width; i += step * 2) {
          const index = Math.floor(i * scale);
          const value = Math.abs(channels[0][index]);
          let x = i;
          let y = value * height;

          ctx.moveTo(x, 0);
          ctx.lineTo(x, y);
          ctx.arc(x + step / 2, y, step / 2, Math.PI, 0, true);
          ctx.lineTo(x + step, 0);

          x = x + step;
          y = -y;
          ctx.moveTo(x, 0);
          ctx.lineTo(x, y);
          ctx.arc(x + step / 2, y, step / 2, Math.PI, 0, false);
          ctx.lineTo(x + step, 0);
        }

        ctx.stroke();
        ctx.closePath();
      });
    });

    wavesurfer.current.on('interaction', () => {
      wavesurfer.current.play();
    });

    return () => {
      wavesurfer.current.destroy();
    };
  }, []);

  return (
    <div className="AudioWaveform">
      <div ref={waveformRef}></div>
    </div>
  );
}

export default AudioWaveform;
