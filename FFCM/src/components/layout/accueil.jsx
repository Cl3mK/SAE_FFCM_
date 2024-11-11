import React from 'react';
import Landing from '@components/accueil/landing';
import Description from '@components/accueil/description';
import Counters from '@components/accueil/counters';
import Calendar from '@components/accueil/calendar';
import Ressources from '@components/accueil/ressources';

const Accueil = () => {
  return (
    <>
      <div style={{ margin: '30px 0', backgroundColor: 'white' }}></div>
      <Landing />
      <Description />
      <Counters />
      <Calendar />
      <Ressources />
    </>
  );
};

export default Accueil;