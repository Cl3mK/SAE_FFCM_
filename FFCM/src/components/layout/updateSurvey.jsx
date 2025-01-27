import React, { useEffect, useState } from 'react';

const UpdateSurvey = () => {
    const [formData, setFormData] = useState(null);

    // Charger les données existantes
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/php/get_survey.php');
            const data = await response.json();
            setFormData(data);
        };

        fetchData();
    }, []);

    // Gérer les modifications des champs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        setFormData((prev) => {
            const updatedArray = checked
                ? [...(prev[name] || []), value]
                : prev[name].filter((item) => item !== value);
            return { ...prev, [name]: updatedArray };
        });
    };

    // Envoyer les modifications au backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/php/update_survey.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        alert(result.message);
    };

    if (!formData) return <div>Chargement...</div>;

    return (
        <div className="survey_container">
            <h1>Mettre à jour votre formulaire</h1>
            <form onSubmit={handleSubmit}>
                <div className="input_group">
                    <label>Nom :</label>
                    <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input_group">
                    <label>Prénom :</label>
                    <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input_group">
                    <label>Genre :</label>
                    <select
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Sélectionner</option>
                        <option value="Homme">Homme</option>
                        <option value="Femme">Femme</option>
                        <option value="Autre">Autre</option>
                        <option value="PreferePasRepondre">Je préfère ne pas répondre</option>
                    </select>
                </div>

                <div className="input_group">
                    <label>Âge :</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input_group">
                    <label>Région :</label>
                    <select
                        name="region"
                        value={formData.region}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Sélectionner la région en France</option>
                        <option value="Auvergne-Rhône-Alpes">Auvergne-Rhône-Alpes</option>
                        <option value="Bourgogne-Franche-Comté">Bourgogne-Franche-Comté</option>
                        <option value="Bretagne">Bretagne</option>
                        <option value="Centre-Val de Loire">Centre-Val de Loire</option>
                        <option value="Corse">Corse</option>
                        <option value="Grand Est">Grand Est</option>
                        <option value="Hauts-de-France">Hauts-de-France</option>
                        <option value="Île-de-France">Île-de-France</option>
                        <option value="Normandie">Normandie</option>
                        <option value="Nouvelle-Aquitaine">Nouvelle-Aquitaine</option>
                        <option value="Occitanie">Occitanie</option>
                        <option value="Pays de la Loire">Pays de la Loire</option>
                        <option value="Provence-Alpes-Côte d'Azur">Provence-Alpes-Côte d'Azur</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Martinique">Martinique</option>
                        <option value="Guyane">Guyane</option>
                        <option value="La Réunion">La Réunion</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Etranger">Étranger</option>
                    </select>
                </div>

                <div className="input_group">
                    <label>Êtes-vous déjà allé(e) en cure thermale ?</label>
                    <div>
                        <input
                            type="radio"
                            name="dejaAlleEnCure"
                            value="Oui"
                            checked={formData.dejaAlleEnCure === 'Oui'}
                            onChange={handleChange}
                        />
                        <label>Oui</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="dejaAlleEnCure"
                            value="Non"
                            checked={formData.dejaAlleEnCure === 'Non'}
                            onChange={handleChange}
                        />
                        <label>Non</label>
                    </div>
                </div>

                <div className="input_group">
                    <label>Êtes-vous adhérent(e) à la FFCM ?</label>
                    <div>
                        <input
                            type="radio"
                            name="adherentFFCM"
                            value="Oui"
                            checked={formData.adherentFFCM === 'Oui'}
                            onChange={handleChange}
                        />
                        <label>Oui</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="adherentFFCM"
                            value="Non"
                            checked={formData.adherentFFCM === 'Non'}
                            onChange={handleChange}
                        />
                        <label>Non</label>
                    </div>
                </div>

                <div className="input_group">
                    <label>Comment avez-vous découvert les cures thermales ?</label>
                    {['Médecin', 'Internet', 'Entourage', 'Autre'].map((option) => (
                        <div key={option}>
                            <input
                                type="checkbox"
                                name="decouverteCure"
                                value={option}
                                checked={formData.decouverteCure?.includes(option)}
                                onChange={handleCheckboxChange}
                            />
                            <label>{option}</label>
                        </div>
                    ))}
                </div>

                <div className="input_group">
                    <label>Pour quelles raisons allez-vous en cure thermale ?</label>
                    {[
                        'Les soins thermaux',
                        'Le repos',
                        'Me détendre',
                        'Visiter la station et ses environs',
                        'La coupure avec le quotidien',
                        'Rencontrer d\'autres curistes',
                        'Autre',
                    ].map((option) => (
                        <div key={option}>
                            <input
                                type="checkbox"
                                name="raisonsCure"
                                value={option}
                                checked={formData.raisonsCure?.includes(option)}
                                onChange={handleCheckboxChange}
                            />
                            <label>{option}</label>
                        </div>
                    ))}
                </div>

                <button type="submit" className="submit_button">Mettre à jour</button>
            </form>
        </div>
    );
};

export default UpdateSurvey;
