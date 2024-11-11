import React, { useState, useEffect } from 'react';
import '@css/annonceurs/Carousel.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import BagnolesDeLOrne from '@images/BagnolesDeLOrne.png';
import Bourboule from '@images/Bourboule.png';
import ChatelGuyon from '@images/ChatelGuyon.png';
import Dax from '@images/Dax.png';
import MontDore from '@images/MontDore.png';
import Royat from '@images/Royat.png';

const images = [
    BagnolesDeLOrne,
    Bourboule,
    ChatelGuyon,
    Dax,
    MontDore,
    Royat
];

const positions = [
    { zIndex: 1, width: 512, height: 320, top: 70, left: "20%", overlayOpacity: 0.6 },
    { zIndex: 2, width: 576, height: 360, top: 50, left: "35%", overlayOpacity: 0.3 },
    { zIndex: 3, width: 640, height: 400, top: 20, left: "50%", overlayOpacity: 0 },  // Centrale
    { zIndex: 2, width: 576, height: 360, top: 50, left: "65%", overlayOpacity: 0.3 },
    { zIndex: 1, width: 512, height: 320, top: 70, left: "80%", overlayOpacity: 0.6 },
    { zIndex: 0, width: 512, height: 320, top: 70, left: "50%", overlayOpacity: 0 }  // Image masquée derrière la centrale
];

const smallPositions = [
    { zIndex: 1, width: 200, height: 125, top: 20, left: "10%", overlayOpacity: 0.6 },
    { zIndex: 2, width: 230, height: 145, top: 15, left: "30%", overlayOpacity: 0.3 },
    { zIndex: 3, width: 260, height: 160, top: 0, left: "50%", overlayOpacity: 0 },  // Centrale
    { zIndex: 2, width: 230, height: 145, top: 15, left: "70%", overlayOpacity: 0.3 },
    { zIndex: 1, width: 200, height: 125, top: 20, left: "90%", overlayOpacity: 0.6 },
    { zIndex: 0, width: 200, height: 125, top: 20, left: "50%", overlayOpacity: 0 }  // Image masquée
];

const Carousel = ({ onImageChange }) => {
    const [currentPositions, setCurrentPositions] = useState(positions);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 430);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 430);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setCurrentPositions(isSmallScreen ? smallPositions : positions);
    }, [isSmallScreen]);

    const nextSlide = () => {
        setCurrentPositions(prev => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
    };

    const prevSlide = () => {
        setCurrentPositions(prev => [...prev.slice(1), prev[0]]);
    };

    useEffect(() => {
        const centralImageIndex = (images.length - (currentPositions.findIndex(pos => pos.zIndex === 3))) % images.length;
        onImageChange(centralImageIndex);
    }, [currentPositions, onImageChange]);

    return (
        <div className="carousel_container">
            <button className="nav_left" onClick={prevSlide}>
                <FontAwesomeIcon icon={faChevronLeft} size="2xl" />
            </button>
            <div className="carousel_inner">
                {images.map((image, index) => {
                    const position = currentPositions[index % currentPositions.length];
                    return (
                        <div
                            className="carousel_item"
                            key={index}
                            style={{
                                zIndex: position.zIndex,
                                width: position.width,
                                height: position.height,
                                top: position.top,
                                left: position.left,
                            }}
                        >
                            <img src={image} alt={`Slide ${index}`} />
                            <span
                                className="overlay"
                                style={{ opacity: position.overlayOpacity }}
                            ></span>
                        </div>
                    );
                })}
            </div>
            <button className="nav_right" onClick={nextSlide}>
                <FontAwesomeIcon icon={faChevronRight} size="2xl" />
            </button>
        </div>
    );
};

export default Carousel;
