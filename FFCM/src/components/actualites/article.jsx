import React from 'react';
import '@css/actualites/Article.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Article = ({title, type, text}) => {
    return (
        <div className='article_container'>
            <div className='article_title'>
                <h1>{title}</h1>
                <div className='article_title_end'>
                    <h2>{type}</h2>
                    <span className='article_chevron'><FontAwesomeIcon icon={faChevronRight} size='lg'/></span>
                </div>
            </div>

            <div className='article_content'>
                <h3>{text || "Aucun texte disponible"}</h3>
            </div>
        </div>
    );
};

export default Article;