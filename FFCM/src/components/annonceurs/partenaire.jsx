import React from 'react';
import '@css/annonceurs/Partenaire.css';

import OfficielThermalisme from '@images/OfficielThermalisme.png';
import Aquae from '@images/Aquae.png';
import MIASC from '@images/MIASC.png';

const Partenaire = () => {
    return (
        <div className='partenaire_container'>
            <div className='partenaire_title'>
                <h1>Nos Partenaires</h1>
            </div>

            <div>
                <ul className='partenaire_liste'>
                    <li>
                        <a href="https://www.officiel-thermalisme.com/" target="_blank" rel="noopener noreferrer">
                            <img className="officiel_thermalisme" src={OfficielThermalisme} alt="L'Officiel du Thermalisme" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.aquae-officiel.fr/" target="_blank" rel="noopener noreferrer">
                            <img className="aquae" src={Aquae} alt="Aquae" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.mutuelle-miasc.fr/" target="_blank" rel="noopener noreferrer">
                            <img className="MIASC" src={MIASC} alt="Mutuelle MIASC" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Partenaire;
