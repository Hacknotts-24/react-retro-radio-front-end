import React, { useState } from 'react';

var returnedTitle = "";

const LinkInputForm = () => {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("button was pressed with data " + title)
    setLoading(true); // Set loading to true when submitting
    setSubmitted(true);
    const link = title;

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
        console.log(responseData.title)
        returnedTitle = responseData.title
      } else {
        console.error('POST request failed');
      }
    } catch (error) {
      console.error('Error sending POST request:', error);
      returnedTitle = "Failed"
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className='output-container'>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Title: {/* Update the label text */}
          <input
            type="text"
            value={title} // Update the value and onChange accordingly
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" >Submit</button>
        </label>
      </form>

      {loading ? ( // Check if loading is true
        <p>Connecting...</p>
      ) : (
        title && (
          <div className="output-container">
            <h3></h3>
            <p>{returnedTitle}</p>
          </div>
        )
      )}
    </div>
  );
};

export default LinkInputForm;
