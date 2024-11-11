import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import '@css/accueil/Counter.css';

const Counter = ({ target, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Animation pour le compteur numérique
  const numberAnimation = useSpring({
    number: inView ? target : 0,
    config: { duration: 1000 },
  });

  // Animation pour le cercle
  const circleAnimation = useSpring({
    progress: inView ? 100 : 0,
    config: { duration: 1000 },
  });

  return (
    <div ref={ref} className="counter-container">
      <div className="circle">
        <svg width="160" height="160" viewBox="0 0 160 160" className="progress-circle">
          <circle
            cx="80" cy="80" r="70"
            className="background-circle"
          />
          <animated.circle
            cx="80" cy="80" r="70"
            className="progress-ring"
            strokeDasharray={439.6} // Circumference of the circle (2 * Math.PI * 70)
            strokeDashoffset={circleAnimation.progress.to((p) => 439.6 * (1 - p / 100))}
          />
        </svg>
        <animated.span className="number">
          {numberAnimation.number.to((n) => Math.floor(n))}
        </animated.span>
      </div>
      <p className="label">{label}</p>
    </div>
  );
};

export default Counter;
