import React, { useState, useRef } from 'react';
import '@css/documents/Accordion.css';
import Elem_accordion from '@components/documents/elem_accordion';
import Carte_contact from '@components/documents/carte_contact';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import MapCure from '@images/MapCure.png';

const contents = [
    {
        title: "La Cure en Pratique",
        content: 
        <>
            <div className="articles-top1">
                <Elem_accordion text="La Charte du Curiste (CdC)" />
            </div>
            <div className="articles-top2">
                <Elem_accordion text="Utiliser la Charte du Curiste" />
            </div>
            <a className='container_map' href="https://www.medecinethermale.fr/curistes/en-pratique/annuaire-des-stations-thermales.html" target="_blank" rel="noopener noreferrer">
                <img className="map_cure" src={MapCure} alt="Destinations thermales" title="Destinations thermales" />
            </a>
            <div className="articles-left">
                <Elem_accordion text="Droits des curistes" />
                <Elem_accordion text="Guide des Bonnes Pratiques" />
                <Elem_accordion text="Grille des Soins 2023" />
                <Elem_accordion text="Questionnaire de Satisfaction" />
                <Elem_accordion text="Réservation de Cures" />
            </div>
        </>
    },
    {
        title: "Remboursements",
        content: 
        <>
            <Elem_accordion text="Imprimé d’une Prise en Charge" />
            <Elem_accordion text="Prise en Charge d’un mois" />
            {/* Rajouter la map */}
            <Elem_accordion text="Prise en Charge immédiate" />
            <Elem_accordion text="Copie d’une Prise en Charge" />
            <Elem_accordion text="Relevé de Remboursement" />
            <Elem_accordion text="Hébergement et transport" />
            <Elem_accordion text="Trois Visites de Cures Obligatoires" />
            <Elem_accordion text="Tiers-Payant" />
            <Elem_accordion text="Lettre Type pour le Tiers-Payant" />
            <Elem_accordion text="Complément Tarifaire" />
        </>
    },
    {
        title: "Lois et Réglementations",
        content:
        <>
            <Elem_accordion text="Lois (Droits des Malades)" />
            <Elem_accordion text="Décret n°2014-1025" />
            <Elem_accordion text="Charte Parcours de Santé" />
            <Elem_accordion text="Rapport Patient-Médecin" />
            <Elem_accordion text="Données économiques (CNETH)" />
            <Elem_accordion text="Règlement intérieur" />
            <Elem_accordion text="Code Déontologique Médical" />
        </>
    },
    {
        title: "Vie de la FFCM",
        content:
        <>
            <Elem_accordion text="Nos actions" />
            <Elem_accordion text="Statut (02/05/2024)" />
            <Elem_accordion text="Renouvellement Agrément" />
            <Elem_accordion text="Fondation de l’UNAASS" />
            <Elem_accordion text="Certificat de Mérite de la FEMTEC" />
            <Elem_accordion text="Avis Déontologique de l’UNAASS" />
        </>
    },
    {
        title: "Nos représentants",
        content: 
        <>
            <div className='accordion_contact'>
                <Carte_contact 
                name="Jean-Maurice RAOULT"
                role="Délégué national aux relations entre les curistes de la CAMIEG et les établissements thermaux en ce qui concerne le Tiers-Payant mutualiste."
                phone="06 15 06 12 51"
                mail="jm.raoult@sfr.fr"
                />
                <Carte_contact 
                name="Guy PATIN"
                role="Délégué national pour le handicap."
                phone="06 35 23 02 15"
                mail="glillepatin@gmail.com"
                />
            </div>
            <Elem_accordion text="Liste des Élus au Bureau et au CA" />
        </>
    }
];

const Accordion = () => {
    const [selected, setSelected] = useState(0)
    const contentRefs = useRef([]);

    const toggle = (i) => {
        setSelected(selected === i ? null : i);
    };

    return (
        <div className='accordion_container'>
            {contents.map((item, i) => (
                <div className='accordion_item' key={i}>
                    <div className='accordion_title' onClick={() => toggle(i)}>
                        <h1>{item.title}</h1>
                        <div>{selected === i ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</div>
                    </div>
                    <div
                        ref={(el) => (contentRefs.current[i] = el)}
                        className={`accordion_content ${selected === i ? "active" : ""}`}
                        style={{
                            maxHeight: selected === i ? `${contentRefs.current[i]?.scrollHeight}px` : "0"
                        }}
                    >
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;