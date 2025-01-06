import React from 'react';
import '@css/login/login.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    return (
        <div className='connect_container'>
            <div className='login_container'>
                <div className='connect_title'>
                    <h1>Se connecter</h1>
                </div>

                <div className="input_group">
                    <label htmlFor="email">Adresse e-mail</label>
                    <div className="input_wrapper">
                        <FontAwesomeIcon icon={faEnvelope} className="input_icon" />
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Entrez votre adresse e-mail" 
                        />
                    </div>
                </div>

                <div className="input_group">
                    <label htmlFor="password">Mot de passe</label>
                    <div className="input_wrapper">
                        <FontAwesomeIcon icon={faLock} className="input_icon" />
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Entrez votre mot de passe" 
                        />
                    </div>
                </div>

                <div className="login_options">
                    <label>
                        <input type="checkbox" />
                        Se souvenir de moi
                    </label>
                    <p><a href="#">Mot de passe oublié ?</a></p>
                </div>

                <button type="submit" className="login_button"><Link to="/survey">Se connecter</Link></button>

                <div className="signup_link">
                    <p>Pas encore inscrit ? <a href="#">S'inscrire</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;