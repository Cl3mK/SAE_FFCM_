import React, { useState } from 'react';
import '@css/actualites/Newsletter.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Newsletter = () => {
    const [acceptPrivacy, setAcceptPrivacy] = useState(false);
    const [acceptCommercial, setAcceptCommercial] = useState(false);

    const handleCheckboxChange = (setter) => (e) => {
    setter(e.target.checked);
    };

  return (
    <div className="newsletter_container">
      <div className='newsletter_title'>
        <h1>S'abonner à la Newsletter</h1>
      </div>

      <div className="newsletter_form">
        <table className='newsletter_table'>
            <tr>
                <td><FontAwesomeIcon icon={faUser} size="lg"/></td>
                <td>Nom :<br />Prénom :</td>
                <td><input type="text" /><br /><input type="text" /></td>
            </tr>
            <tr>
                <td><FontAwesomeIcon icon={faEnvelope} size="lg"/></td>
                <td>Mail :</td>
                <td><input type="text" /></td>
            </tr>
        </table>

        <ul className='newsletter_bottom'>
          <li>
            <label>
              <input 
                type="checkbox" 
                checked={acceptPrivacy} 
                onChange={handleCheckboxChange(setAcceptPrivacy)}
              /> 
              J'ai lu et j'accepte les conditions générales d'abonnement et la politique de confidentialité.
            </label>
          </li>
          <li>
            <label>
              <input 
                type="checkbox" 
                checked={acceptCommercial} 
                onChange={handleCheckboxChange(setAcceptCommercial)}
              /> 
              J’accepte que mes données soient utilisées à des fins commerciales pour recevoir des offres de partenaires, et l'utilisation de cookies.
            </label>
          </li>
        </ul>

        <div className='sabonner_container'>
          <button className="sabonner_button">S'abonner</button>
        </div>
      </div>

      <div className='newsletter_below'>
        <h3>Recevez les dernières actualités et mises à jour concernant l’association.</h3>
        <h3>Ne ratez aucun de nos prochains évènements ou réunions et participer activement à la vie de la FFCM.</h3>
      </div>
    </div>
  );
};

export default Newsletter;
