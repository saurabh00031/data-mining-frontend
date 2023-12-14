import React, { useEffect, useState } from 'react';
import axios from 'axios';
import diana from 'file:///C:/Users/Saurabh/Desktop/DM assignments/dm_assignments/dm_assignments/dm_assignments/static/DIANA.png';
import agnes from 'file:///C:/Users/Saurabh/Desktop/DM assignments/dm_assignments/dm_assignments/dm_assignments/static/AGNES.png';
import dbscan from 'file:///C:/Users/Saurabh/Desktop/DM assignments/dm_assignments/dm_assignments/dm_assignments/static/DBSCAN.png';
import kmeans from 'file:///C:/Users/Saurabh/Desktop/DM assignments/dm_assignments/dm_assignments/dm_assignments/static/KMEANS.png';
import kmedoid from 'file:///C:/Users/Saurabh/Desktop/DM assignments/dm_assignments/dm_assignments/dm_assignments/static/KMEDOID.png';
import birch from 'file:///C:/Users/Saurabh/Desktop/DM assignments/dm_assignments/dm_assignments/dm_assignments/static/BIRCH.png';


const Assignmnet6 = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios
        .get('http://localhost:8000/kmeans_clustering/')
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Axios error:', error);
          setLoading(false);
        });
    }, []);
  
    return (
      <div className="container mt-5">
        {loading ? (
          <p className="loading-text">Loading...</p>
        ) : data ? (
          <div className="col-12">
              <h1><u>Name Of File: {data.name}</u></h1>
  
              <h3>AGNES</h3>
              <img src={agnes} height={600} width={600} alt="AGNES" />
  
              <h3>DIANA</h3>
              <img src={diana}  height={600} width={600}  alt="DIANA" />

              <h3>DBSCAN</h3>
              <img src={dbscan}  height={600} width={600}  alt="DBSCAN" />

              <h3>KMEANS</h3>
              <img src={kmeans}  height={600} width={600}  alt="KMEANS" />

              <h3>KMEDOID</h3>
              <img src={kmedoid}  height={500} width={500}  alt="KMEDOID" />

              <h3>BIRCH</h3>
              <img src={birch}  height={500} width={500}  alt="BIRCH" />
          </div>
        ) : (
          <p className="no-data">No data available.</p>
        )}
      </div>
    );
}

export default Assignmnet6