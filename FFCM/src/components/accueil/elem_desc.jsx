import React from 'react';
import '@css/accueil/Elem_desc.css';

const Elem_desc = ({icon, text, className}) => {
    return (
        <div className={`elem_container ${className}`}>
            <div className='icon'>
                {icon}
            </div>
            <div className='text'>
                {text}
            </div>
        </div>
    );
};

export default Elem_desc;