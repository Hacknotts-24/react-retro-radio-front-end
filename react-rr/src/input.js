import React, { useState, useRef, useEffect } from 'react';

var returnedTitle = "";
var songName = "";
var state = "";
const nowPlayingString = "Now Playing: ";
const pausedString = "Paused: ";


const LinkInputForm = ({ updateIsPlaying, isPlaying }) => {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [videoId, setVideoId] = useState('');
  const audioRef = useRef(null);

  const prevIsPlaying = useRef(isPlaying);

  // Function to play or pause the audio based on the isPlaying prop
  const controlAudioPlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

   // Update the audio playback when isPlaying changes
   useEffect(() => {
    if (prevIsPlaying.current !== isPlaying) {
      controlAudioPlayback();
      prevIsPlaying.current = isPlaying;

      
      state = isPlaying ? pausedString : nowPlayingString  
    }
  }, [isPlaying]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("button was pressed with data " + title);
    setLoading(true); // Set loading to true when submitting
    setSubmitted(true);
    const link = title;
    const parsedUrl = new URL(link);
    const searchParams = new URLSearchParams(parsedUrl.search);
    const videoId = searchParams.get("v");
    setVideoId(videoId);

    // Send a POST request to api-endpoint.com with the input text as JSON
    const postData = { "link": link }; // Update the key to 'title'
    try {
      const response = await fetch('https://kxwh62mz-3000.uks1.devtunnels.ms/youtube', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Accept': '*/*',
        },
        body: JSON.stringify(postData),
      });

      // Handle the response if needed
      if (response.ok) {
        const responseData = await response.json();
        console.log('POST request successful');
        console.log(responseData.title);
        returnedTitle = responseData.title;
        songName = responseData.title;
        state = "Now Playing: "
        setAudioUrl("https://kxwh62mz-3000.uks1.devtunnels.ms/audio-stream?url=" + videoId);
        console.log("Set new audio url");
      } else {
        console.error('POST request failed');
      }
    } catch (error) {
      console.error('Error sending POST request:', error);
      returnedTitle = "Failed";
    } finally {
      setLoading(false);
      setTitle(" ");
      updateIsPlaying(true);
    }
  };

  return (
    <div className='output-container'>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Title:
          <input
            type="text"
            id="mainInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="scrolling-container">
            <div className="scrolling-text">{title}
            </div>
          </div>
          <button type="submit" id="uniqueEditButton">Submit</button>
        </label>
      </form>
  
      {loading ? (
        <p>Connecting...</p>
      ) : (
        title && (
          <div className="output-container">
            <div className='scrolling-container'>
            <h3></h3>
                <div className="scrolling-text"><p>{state + returnedTitle}</p>
            </div>
            </div>
          </div>
        )
      )}
      {audioUrl && (
        <audio ref={audioRef} controls autoPlay style={{ display: 'none' }} key={audioUrl}>
          <source src={audioUrl} type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
  };

export default LinkInputForm;
