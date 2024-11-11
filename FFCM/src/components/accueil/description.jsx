import React from 'react';
import '@css/accueil/Description.css';
import Elem_desc from '@components/accueil/elem_desc';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faWater, faAnchor, faHeart, faSmile } from "@fortawesome/free-solid-svg-icons";

const descriptions = [
    {
        icon: faUsers,
        text: "Nous sommes un des membres fondateurs de l'Union Nationale des Associations Agréées du Système de Santé (France Assos Santé)"
    },
    {
        icon: faWater,
        text: "Nous œuvrons pour que l'ensemble des acteurs s'unissent pour sauvegarder et développer le thermalisme social et médicalisé de France"
    },
    {
        icon: faAnchor,
        text: "Nous représentons officiellement les intérêts des curistes assurés sociaux auprès des organismes publics et privés"
    },
    {
        icon: faHeart,
        text: "Nous accueillons les curistes assurés sociaux et tous les amis du thermalisme social et médicalisé"
    },
    {
        icon: faSmile,
        text: "La FFCM est gérée par des bénévoles et l'essentiel de nos ressources provient des curistes, ce qui fonde notre indépendance"
    }
];

const Description = () => {
    return (
        <div className='description_container'>
            <div className='description_title'>
                <h1>Qui sommes nous ?</h1>
            </div>
            {descriptions.map((desc, index) => (
                <Elem_desc 
                    key={index}
                    icon={<FontAwesomeIcon icon={desc.icon} size="2xl" />}
                    text={desc.text}
                    className={index % 2 === 0 ? 'even' : 'odd'}
                />
            ))}
        </div>
    );
};

export default Description;