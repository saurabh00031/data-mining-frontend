import React, { useEffect, useState } from 'react';


const Assignment8_2 = () => {

    const [rankTable, setRankTable] = useState([]);
    const [hubTable, setHubTable] = useState([]);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8000/calculate_hits/'); // Replace with your API endpoint
          const data = await response.json();
          console.log(data.authority_rank)
          setRankTable(data.authority_rank);
          setHubTable(data.hub_rank)
          
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
            <td>{entry[0]}</td>
            <td>{entry[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <h2>Hub rank</h2>
    <table className='table'>
      <thead>
        <tr>
          <th>Page</th>
          <th>Rank</th>
        </tr>
      </thead>
      <tbody>
        {hubTable.map((entry, index) => (
          <tr key={index}>
            <td>{entry[0]}</td>
            <td>{entry[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Assignment8_2