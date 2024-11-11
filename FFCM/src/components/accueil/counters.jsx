import React from 'react';
import Elem_counter from '@components/accueil/elem_counter';
import '@css/accueil/Counters.css';

const Counters = () => {
  const counters = [
    { target: 1300, label: "Adhérents" },
    { target: 3500, label: "Sympathisants" },
    { target: 70, label: "Stations" },
    { target: 80000, label: "Curistes" },
  ];

  return (
    <div className="counters_container">
      {counters.map((counter, index) => (
        <Elem_counter key={index} target={counter.target} label={counter.label} />
      ))}
    </div>
  );
};

export default Counters;
