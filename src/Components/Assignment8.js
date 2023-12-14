import React, { useState } from 'react';


const Assignment8 = () => {

    const [seedUrl, setSeedUrl] = useState('');
  const [links, setLinks] = useState([]);
  const [error, setError] = useState('');

  const handleSeedUrlChange = (event) => {
    setSeedUrl(event.target.value);
  };

  const handleCrawlClick = () => {
    fetch('http://localhost:8000/crawler/', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          seed_url: seedUrl,
        }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.crawled_urls) {
          console.log(data.crawled_urls)
          setLinks(data.crawled_urls || []);
          setError('');
        } else {
          setLinks([]);
          setError(data.msg || 'No links found.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setError('An error occurred while fetching data.');
      });
  };
  return (
    <div>
      <h1 className="mt-5">Web Crawler</h1>
      <label htmlFor="seedUrl">Seed URL:</label>
      <input type="text" id="seedUrl" name="seed_url" value={seedUrl} onChange={handleSeedUrlChange} />
      <button onClick={handleCrawlClick}>Crawl</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {links.length > 0 && (
        <div>
          <h2>Links:</h2>
          <ul>
            {links.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Assignment8