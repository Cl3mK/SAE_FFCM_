import React, { useState } from 'react';
import '@css/accueil/Ressources.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faDollarSign, faFileAlt, faDownload } from "@fortawesome/free-solid-svg-icons";

const Ressources = () => {
  const sections = [
    { id: 1, label: "Droits des curistes", icon: faInfoCircle, content: "Description des droits des curistes" },
    { id: 2, label: "Informations financières", icon: faDollarSign, content: "Informations financières pour les curistes" },
    { id: 3, label: "Outils pratiques", icon: faFileAlt, content: "Outils et ressources pratiques pour les curistes" },
  ];

  const [activeSection, setActiveSection] = useState(sections[0]);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const renderFile = (content) => {
    return (
        <>
            <h3>{content}</h3>
            <button className="download">Télécharger<FontAwesomeIcon icon={faDownload} /></button>
        </>
    )
  }

  const renderContent = () => {
    if (activeSection.id === 1) {
        return (
            <>
                {renderFile("Droits principaux")}
                {renderFile("Plus de droits")}
            </>
        )
    }
    else if (activeSection.id === 2) {
        return (
            <>
                {renderFile("Taxes sur les cures (2024)")}
                {renderFile("Tableau du reste à charge (2024)")}
            </>
        )
    }
    else if (activeSection.id === 3) {
        return (
            <>
                {renderFile("La Charte du Curiste (CdC)")}
                {renderFile("Utiliser la Charte du Curiste")}
                {renderFile("Lettre pour éviter les arrhes")}
            </>
        )
    }
  }

  return (
    <div className="ressources_container">
        <div className='ressources_title'>
            <h1>Ressources pour les curistes</h1>
        </div>

        <div className='ressources_main'>
            <div className="nav_column">
                {sections.map((section) => (
                    <div key={section.id}
                        className={`nav_item ${activeSection.id === section.id ? 'active' : ''}`}
                        onClick={() => handleSectionClick(section)}>
                        <div className='ressource_icon'><FontAwesomeIcon icon={section.icon} size="2x" /></div>
                        <div className='ressource_label'>{section.label}</div>
                    </div>
                ))}
            </div>

            <div className="content_container">
                {renderContent()}
            </div>
        </div>
    </div>
  );
};

export default Ressources;