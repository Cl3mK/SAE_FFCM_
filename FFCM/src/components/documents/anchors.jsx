import React from 'react';
import '@css/documents/Anchors.css';

import Anchor from "@components/documents/anchor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoFilm, faArchive, faChartLine } from "@fortawesome/free-solid-svg-icons";

const Anchors = () => {
    return (
        <div className='anchors_container'>
            <ul>
                <li><Anchor title='Médias' icon={<FontAwesomeIcon icon={faPhotoFilm} size='2xl'/>} /></li>
                <li><Anchor title='Archives' icon={<FontAwesomeIcon icon={faArchive} size='2xl'/>} /></li>
                <li><Anchor title='Navigation' icon={<FontAwesomeIcon icon={faChartLine} size='2xl'/>} /></li>
            </ul>
        </div>
    );
};

export default Anchors;
