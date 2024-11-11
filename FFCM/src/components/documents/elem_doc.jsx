import React from 'react';
import Accordion from '@components/documents/accordion';
import Adhesion from '@components/documents/adhesion';
import Anchors from '@components/documents/anchors';
import ButtonStay from '@components/buttonStay';
import '@css/documents/Elem_doc.css'

const Elem_doc = () => {
  return (
    <>
    <div className='doc_container'>
      <div className='accordion_itself'>
          <Accordion />
          <Anchors />
      </div>
      <div className='adhesion_itself'>
          <Adhesion />
      </div>
      <div className='button_stay'>
        <ButtonStay texte="Adhérer à la FFCM"/>
      </div>
    </div>
    </>
  );
};

export default Elem_doc;