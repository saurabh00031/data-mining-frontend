import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Assignment6_a = () => {

    const [b, setB] = useState(0.0);
    const [db, setDb] = useState(0.0);
    const [k, setK]= useState(0.0);
    const [a, setA]= useState(0.0);
    const [name, setName] = useState(0.0);






    useEffect(() => {
      // Make an API call to get association rules data
      axios.get('http://localhost:8000/clustering_evaluation/')
        .then(response => {
          console.log(response.data);
          setA(response.data.Agg['Adjusted']);
          setK(response.data.KMeans['Adjusted']);
          setDb(response.data.DBSCAN['Adjusted']);
          setB(response.data.Birch['Adjusted']);
          setName(response.data.name)




        })
        .catch(error => {
          console.error('Error fetching association rules:', error);
        });
    }, []); // Empty dependency array ensures the effect runs only once on mount
  
  return (
    <>
    <h1>Tabulation of accuracy using ARI</h1>

    <div className="border-2">
        <h4>Name of file : {name}</h4>
        <h4>Birch : {b}</h4>
        <h4>Kmeans : {k}</h4>
        <h4>DBSCAN : {db}</h4>
        <h4>Agnes : {a}</h4>




  



    
    </div>

    </>
  );
}

export default Assignment6_a