import React, { useState } from 'react';
import '@css/documents/Adhesion.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome, faPhone, faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

const Adhesion = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleCheckboxChange = (setter) => (e) => {
    setter(e.target.checked);
  };

  return (
    <div className="adhesion_container">
      <div className='adhesion_title'>
        <h1>Bulletin d'Adhésion</h1>
      </div>

      <div className="adhesion_form">
        <table className='adhesion_table'>
            <tr>
                <td><FontAwesomeIcon icon={faUser} size="lg"/></td>
                <td>Nom* :<br />Prénom* :</td>
                <td><input type="text" /><br /><input type="text" /></td>
            </tr>
            <tr>
                <td><FontAwesomeIcon icon={faHome} size="lg"/></td>
                <td>Adresse* :<br />Code Postal* :<br />Ville* :</td>
                <td><input type="text" /><br /><input type="text" /><br /><input type="text" /></td>
            </tr>
            <tr>
                <td><FontAwesomeIcon icon={faPhone} size="lg"/></td>
                <td>Téléphone :</td>
                <td><input type="text" /></td>
            </tr>
            <tr>
                <td><FontAwesomeIcon icon={faEnvelope} size="lg"/></td>
                <td>Mail :</td>
                <td><input type="text" /></td>
            </tr>
            <tr>
                <td><FontAwesomeIcon icon={faFile} size="lg"/></td>
                <td>Curiste à :<br />Affilié(e) à la mutuelle :</td>
                <td><input type="text" /><br /><input type="text" /></td>
            </tr>
        </table>

        <ul className='adhesion_bottom'>
          <li>Tous les champs avec * sont obligatoires</li>
          <li>Vos données ne sont communiquées à aucun autre organisme.</li>
          <li>L’adhésion s’accompagne d’une cotisation minimale de 10 euros.</li>
          <li>
            <label>
              <input 
                type="checkbox" 
                checked={acceptTerms} 
                onChange={handleCheckboxChange(setAcceptTerms)}
              /> 
              J'accepte les conditions générales d'adhésion et la politique de confidentialité.
            </label>
          </li>
        </ul>

        <div className='jadhere_container'>
          <button className="jadhere_button">J'adhère</button>
        </div>
      </div>
    </div>
  );
};

export default Adhesion;
