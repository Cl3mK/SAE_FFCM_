import React from 'react';
import '@css/Footer.css';
import ffcmLogo from '@images/ffcm_logo_white.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className='footer_title'>
        <img className="footer_logo" src={ffcmLogo} alt="FFCM Logo" />
        <h1>Fédération Françaises des Curistes médicalisés</h1>
      </div>

      <div className="footer_contact">
        <h2>Nous Contacter</h2>
        <table className='contact_table'>
          <tr>
            <td><FontAwesomeIcon icon={faPhone} /></td>
            <td>Tél : 06 83 27 22 80<br />Fax : 02 43 21 65 78</td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faEnvelope} /></td>
            <td><a href="mailto:ffcm@libertysurf.fr">ffcm@libertysurf.fr</a></td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faLocationDot} /></td>
            <td>2 rue des Frères Rodriguez<br />72700 Allonnes</td>
          </tr>
        </table>
      </div>

      <div className="footer_partenaire">
        <h2>Nos Partenaires</h2>
        <ul>
          <li><a href="#">ACCB - Association des Curistes de Capvern les Bains</a></li>
          <li><a href="#">FEMTEC - Fédération Mondiale du Thermalisme et du Climatisme</a></li>
          <li><a href="#">UTEPSIAA - Université Thermale de Barbotan les Thermes</a></li>
          <li><a href="#">EAPTC - European Association of Patients and Users of Thermal Centres</a></li>
          <li><a href="#">L'Officiel du Thermalisme</a></li>
        </ul>
      </div>
        
      <div className="footer_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2671.459242675278!2d0.1572608760772188!3d47.96618006307834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e28583f634f147%3A0x75e0a048dc91bebd!2sTour%20E%2C%202%20Rue%20des%20Fr%C3%A8res%20Rodriguez%2C%2072700%20Allonnes!5e0!3m2!1sfr!2sfr!4v1730037526458!5m2!1sfr!2sfr"
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <ul className="footer_bottom">
        <li><a href="/informations-legales">Informations légales</a></li>
        <li><a href="/cookies">Cookies</a></li>
        <li><a href="/donnees-personnelles">Données Personnelles</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
