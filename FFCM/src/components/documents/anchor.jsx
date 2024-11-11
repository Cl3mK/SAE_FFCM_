import React from 'react';
import '@css/documents/Anchor.css';

const Anchor = ({title, icon}) => {
    return (
        <div className='anchor_container'>
            <div className='anchor_title'>
                {title}
            </div>
            <div className='anchor_icon'>
                {icon}
            </div>
        </div>
    );
};

export default Anchor;