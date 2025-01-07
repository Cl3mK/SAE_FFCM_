import React, { useState } from "react";
import '@css/survey/survey.css';

function Survey() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    genre: "",
    age: "",
    region: "",
    habiteEtranger: false,
    dejaAlleEnCure: "",
    adherentFFCM: "",
    decouverteCure: [],
    raisonsCure: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => {
      const newArray = checked
        ? [...prev[name], value]
        : prev[name].filter((item) => item !== value);
      return { ...prev, [name]: newArray };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="survey_container">
        <form onSubmit={handleSubmit} className="survey_form">
        <div className='connect_title'>
            <h1>Partagez votre avis sur les cures thermales </h1>
        </div> 
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
          <label>Où habitez-vous ?</label>
          <select
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionner la région en France</option>
            {/* 13 régions métropolitaines */}
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

            {/* 5 DOM-TOM */}
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Martinique">Martinique</option>
            <option value="Guyane">Guyane</option>
            <option value="La Réunion">La Réunion</option>
            <option value="Mayotte">Mayotte</option>

            {/* Option pour étranger */}
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
              onChange={handleChange}
              required
            />
            <label>Oui</label>
          </div>
          <div>
            <input
              type="radio"
              name="dejaAlleEnCure"
              value="Non"
              onChange={handleChange}
              required
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
              onChange={handleChange}
              required
            />
            <label>Oui</label>
          </div>
          <div>
            <input
              type="radio"
              name="adherentFFCM"
              value="Non"
              onChange={handleChange}
              required
            />
            <label>Non</label>
          </div>
        </div>

        <div className="select_group">
          <label>Comment avez-vous découvert les cures thermales ?</label>
          <div className="checkbox_group">
            <input
              type="checkbox"
              name="decouverteCure"
              value="Médecin"
              onChange={handleCheckboxChange}
            />
            <label>Médecin</label>
          </div>
          <div className="checkbox_group">
            <input
              type="checkbox"
              name="decouverteCure"
              value="Internet"
              onChange={handleCheckboxChange}
            />
            <label>Internet</label>
          </div>
          <div className="checkbox_group">
            <input
              type="checkbox"
              name="decouverteCure"
              value="Entourage"
              onChange={handleCheckboxChange}
            />
            <label>Entourage</label>
          </div>
          <div className="checkbox_group">
            <input
              type="checkbox"
              name="decouverteCure"
              value="Autre"
              onChange={handleCheckboxChange}
            />
            <label>Autre</label>
            <input
              type="text"
              name="autreDecouverte"
              value={formData.autreDecouverte || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="select_group">
          <label>Pour quelles raisons vous rendez-vous en cure thermale ?</label>
          <div className="checkbox_group">
            <input
              type="checkbox"
              name="raisonsCure"
              value="Les soins thermaux"
              onChange={handleCheckboxChange}
            />
            <label>Les soins thermaux</label>
          </div>
          <div className="checkbox_group">
            <input
              type="checkbox"
              name="raisonsCure"
              value="Le repos"
              onChange={handleCheckboxChange}
            />
            <label>Le repos</label>
          </div>
          <div className="checkbox_group">
            <input
              type="checkbox"
              name="raisonsCure"
              value="Me détendre"
              onChange={handleCheckboxChange}
            />
            <label>Me détendre</label>
          </div>
          <div className="checkbox_group">
            <input
              type="checkbox"
              name="raisonsCure"
              value="Visiter la station et ses environs"
              onChange={handleCheckboxChange}
            />
            <label>Visiter la station et ses environs</label>
          </div>
          <div className="checkbox_group">
            <input
              type="checkbox"
              name="raisonsCure"
              value="La coupure avec le quotidien"
              onChange={handleCheckboxChange}
            />
            <label>La coupure avec le quotidien</label>
          </div>
          <div className="checkbox_group">
            <input
              type="checkbox"
              name="raisonsCure"
              value="Rencontrer d'autres curistes"
              onChange={handleCheckboxChange}
            />
            <label>Rencontrer d'autres curistes</label>
          </div>
          <div className="checkbox_group">
            <input
              type="checkbox"
              name="raisonsCure"
              value="Autre"
              onChange={handleCheckboxChange}
            />
            <label>Autre</label>
            <input
              type="text"
              name="autreRaison"
              value={formData.autreRaison || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="submit_button">Soumettre</button>
      </form>
    </div>
  );
}

export default Survey;