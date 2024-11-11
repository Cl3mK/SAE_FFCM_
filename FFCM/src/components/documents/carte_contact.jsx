import React from 'react';
import '@css/documents/Carte_contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

const Carte_contact = ({ name, role, mail, phone }) => {
    return (
        <div className="carte_contact_container">
            <div className="carte_contact_title">
                <FontAwesomeIcon icon={faUser} size="lg" className="icon_user" />
                <h1 className="name">{name}</h1>
            </div>
            <div className="carte_contact_role">{role}</div>
            <div className="contact_info">
                <div className="contact_item">
                    <FontAwesomeIcon icon={faPhone} size="lg" className='item_icon'/>
                    <span>{phone}</span>
                </div>
                <div className="contact_item">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" className='item_icon'/>
                    <span>{mail}</span>
                </div>
            </div>
        </div>
    );
};

export default Carte_contact;
