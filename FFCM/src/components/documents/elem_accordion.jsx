import React from 'react';
import '@css/documents/Elem_accordion.css';

const Elem_accordion = ({text}) => {
    return (
        <div className={'elem_accordion_container'}>
            <div className='elem_accordion_text'>
                {text}
            </div>
        </div>
    );
};

export default Elem_accordion;