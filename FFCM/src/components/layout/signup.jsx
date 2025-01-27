import React from 'react';
import '@css/login/login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
    return (
        <div className='connect_container'>
            <form action="http://localhost:8000/FFCM/src/php/signup.php" method="post">
                <div className='login_container'>
                    <div className='connect_title'>
                        <h1>S'inscrire</h1>
                    </div>

                    <div className="input_group1">
                        <label htmlFor="email">Adresse e-mail</label>
                        <div className="input_wrapper">
                            <FontAwesomeIcon icon={faEnvelope} className="input_icon" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Entrez votre adresse e-mail"
                                required
                            />
                        </div>
                    </div>

                    <div className="input_group1">
                        <label htmlFor="password">Mot de passe</label>
                        <div className="input_wrapper">
                            <FontAwesomeIcon icon={faLock} className="input_icon" />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Entrez votre mot de passe"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="login_button">S'inscrire</button>

                    <div className="signup_link">
                        <p>Vous avez déjà de compte ? <a href="/login">Se connecter.</a></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;