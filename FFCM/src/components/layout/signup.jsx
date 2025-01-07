import React from 'react';
import '@css/login/login.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
    return (
        <div className='connect_container'>
            <form action="../../php/signup.php" method="post">
                <div className='login_container'>
                    <div className='connect_title'>
                        <h1>S'inscrire</h1>
                    </div>

                    <div className="input_group">
                        <label htmlFor="email">Adresse e-mail</label>
                        <div className="input_wrapper">
                            <FontAwesomeIcon icon={faEnvelope} className="input_icon"/>
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
                            <FontAwesomeIcon icon={faLock} className="input_icon"/>
                            <input
                                type="password"
                                id="password"
                                placeholder="Entrez votre mot de passe"
                            />
                        </div>
                    </div>

                    <div className="login_options">
                        <label>
                            <input type="checkbox"/>
                            Se souvenir de moi
                        </label>
                    </div>

                    <button type="submit" className="login_button"><Link to="/survey">S'inscrire</Link></button>

                    <div className="signup_link">
                        <p>Déjà inscrit ? <a href="/login">Se connecter</a></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;