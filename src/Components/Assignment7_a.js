import React, { useState, useEffect } from 'react';

const Assignment7_a = () => {

    const [associationRules, setAssociationRules] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8000/generate_rules/');
            const data = await response;
            console.log(data.body)
            setAssociationRules(data.association_rules);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div>
    <h2 className="mt-5">Association Rules</h2>
    <ul>
      {associationRules.map((rule, index) => (
        <li key={index}>
          <p>Antecedents: {rule.antecedents.join(', ')}</p>
          <p>Consequents: {rule.consequents.join(', ')}</p>
          <p>Antecedent Support: {rule['antecedent support']}</p>
          <p>Consequent Support: {rule['consequent support']}</p>
          <p>Support: {rule.support}</p>
          <p>Confidence: {rule.confidence}</p>
          <p>Lift: {rule.lift}</p>
          <p>Leverage: {rule.leverage}</p>
          <p>Conviction: {rule.conviction}</p>
          <p>Zhang's Metric: {rule.zhangs_metric}</p>
        </li>
      ))}
    </ul>
  </div>

  );
}

export default Assignment7_a
