import React from 'react';
import '@css/buttonStay.css';

const ButtonStay = ({texte}) => {
    return (
        <div className='button_stay_container'>
            {texte}
        </div>
    );
};

export default ButtonStay;