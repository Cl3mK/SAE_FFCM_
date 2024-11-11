import React, { useState, useRef, useEffect } from 'react';
import '@css/actualites/Onglet.css';

const Onglet = ({onTabChange}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [tabWidth, setTabWidth] = useState(0);
    const [position, setPosition] = useState(0);
    
    const tabs = ["Tous", "Évènements", "Réunions"];
    const tabRefs = useRef([]);

    // Calculer la largeur et la position de chaque onglet au chargement
    useEffect(() => {
        if (tabRefs.current[activeIndex]) {
            const currentTab = tabRefs.current[activeIndex];
            setTabWidth(currentTab.offsetWidth);

            // Ajustement spécifique en fonction de l'index
            const basePosition = currentTab.offsetLeft;
            const adjustedPosition =
                activeIndex === 0 ? basePosition + 2 : // Ajuste "Tous"
                activeIndex === 1 ? basePosition :     // Ajustement pour "Évènements"
                activeIndex === 2 ? basePosition - 2 : // Ajuste "Réunions"
                basePosition;

            setPosition(adjustedPosition);
        }
    }, [activeIndex]);

    // Gestion de l'événement de clic pour mettre à jour l'index actif
    const handleTabClick = (index) => {
        setActiveIndex(index);
        onTabChange(index); // Appeler la fonction pour mettre à jour l'onglet actif dans Elem_actu
    };

    return (
        <div className='onglet_container'>
            <ul className='onglet_titles'>
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        ref={(el) => (tabRefs.current[index] = el)} // Référence pour chaque onglet
                        className={index === activeIndex ? 'active' : ''}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab}
                    </li>
                ))}
                {/* Barre d'animation */}
                <span
                    className="active-tab"
                    style={{
                        width: `${tabWidth}px`,  // Largeur exacte de l'onglet
                        left: `${position}px`,   // Position ajustée
                        transition: 'left 0.3s ease'  // Transition douce pour le déplacement
                    }} 
                />
            </ul>
        </div>
    );
};

export default Onglet;
