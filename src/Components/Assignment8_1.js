import React, { useEffect, useState } from 'react';

const Assignment8_1 = () => {

    const [rankTable, setRankTable] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/calculate_pagerank/'); // Replace with your API endpoint
        const data = await response.json();
        setRankTable(data.rank_table);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Em
    return (
        <div className="mt-5">
          <h2>Rank Table</h2>
          <table className='table'>
            <thead>
              <tr>
                <th>Page</th>
                <th>Rank</th>
              </tr>
            </thead>
            <tbody>
              {rankTable.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.Page}</td>
                  <td>{entry.Rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default Assignment8_1
