import React, { useState } from 'react';
import axios from 'axios';

const Assignment7_b = () => {

const [minSupport, setMinSupport] = useState(0.1);
  const [minConfidence, setMinConfidence] = useState(0.7);
  const [associationRules, setAssociationRules] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/generate-rules/', {
        min_support: minSupport,
        min_confidence: minConfidence,
      });

      setAssociationRules(response.data || []);
      setError(null);
    } catch (error) {
      setError(`Error: ${error.message}`);
      console.error('Error:', error);
    }
  };

  return (
    <div className="mt-5">
    <form onSubmit={handleSubmit}>
      <label>
        Min Support:
        <input
          type="number"
          step="0.01"
          value={minSupport}
          onChange={(e) => setMinSupport(e.target.value)}
        />
      </label>
      <br />
      <label>
        Min Confidence:
        <input
          type="number"
          step="0.01"
          value={minConfidence}
          onChange={(e) => setMinConfidence(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button type="submit">Generate Rules</button>
    </form>

    <div>
      <h2>Association Rules</h2>
      <ul>
        {associationRules}
      </ul>
    </div>
  </div>
);
}

export default Assignment7_b

