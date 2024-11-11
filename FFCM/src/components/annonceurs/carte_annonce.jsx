import React from 'react';
import '@css/annonceurs/Carte_annonce.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Carte_annonce = ({entreprise, type, mail, phone, adresse}) => {
    return (
        <div className={'carte_annonce_container'}>
            <div className='carte_annonce_title'>
                <h1>{entreprise}</h1>
                <h2>{type}</h2>
            </div>
            <table className='carte_annonce_table'>
            <tr>
                <td><FontAwesomeIcon icon={faEnvelope} size="lg"/></td>
                <td>{mail}</td>
            </tr>
            <tr>
                <td><FontAwesomeIcon icon={faPhone} size="lg"/></td>
                <td>{phone}</td>
            </tr>
            <tr>
                <td><FontAwesomeIcon icon={faLocationDot} size="lg"/></td>
                <td>{adresse}</td>
            </tr>
        </table>
        </div>
    );
};

export default Carte_annonce;