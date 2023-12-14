import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Assignment7 = () => {

    const [associationRules, setAssociationRules] = useState([]);

    useEffect(() => {
      // Make an API call to get association rules data
      axios.get('http://localhost:8000/generate_rules/')
        .then(response => {
          console.log(response.data);
          setAssociationRules(response.data);
        })
        .catch(error => {
          console.error('Error fetching association rules:', error);
        });
    }, []); // Empty dependency array ensures the effect runs only once on mount
  
    return (
        <div>
          <h2 className="mt-5">Association Rules Table</h2>
            <h5>{associationRules}</h5>
        </div>
      );
}

export default Assignment7
