import React, { useState } from 'react';

const LinkInputForm = () => {
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("button was pressed with data " + title)

    const link = title

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
        console.log('POST request successful');
      } else {
        console.error('POST request failed');
      }
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };

  const extractLinkTitle = async (link) => {
    // This is a basic example, you might want to use a more robust solution.
    const matches = link.match(/<title>(.*?)<\/title>/i);
    return matches ? matches[1] : 'No title found';
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
        </label>
        <button type="submit">Submit</button>
      </form>

      {title && (
        <div className="output-container">
          <h3>Title:</h3>
          <p>{title}</p>
        </div>
      )}
    </div>
  );
};

export default LinkInputForm;
