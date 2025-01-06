import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom :</label>
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Prénom :</label>
        <input
          type="text"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          required
        />
      </div>

      <div>
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

      <div>
        <label>Âge :</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Où habitez-vous ?</label>
        <select
          name="region"
          value={formData.region}
          onChange={handleChange}
          required
        >
          <option value="">Sélectionner la région en France</option>
          {/* Ajouter les options pour chaque région ici */}
          <option value="Etranger">Étranger</option>
        </select>
      </div>

      <div>
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

      <div>
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

      <div>
        <label>Comment avez-vous découvert les cures thermales ?</label>
        <div>
          <input
            type="checkbox"
            name="decouverteCure"
            value="Médecin"
            onChange={handleCheckboxChange}
          />
          <label>Médecin</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="decouverteCure"
            value="Internet"
            onChange={handleCheckboxChange}
          />
          <label>Internet</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="decouverteCure"
            value="Entourage"
            onChange={handleCheckboxChange}
          />
          <label>Entourage</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="decouverteCure"
            value="Autre"
            onChange={handleCheckboxChange}
          />
          <label>Autre (précisez)</label>
          <input
            type="text"
            name="autreDecouverte"
            value={formData.autreDecouverte || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label>Pour quelles raisons vous rendez-vous en cure thermale ?</label>
        <div>
          <input
            type="checkbox"
            name="raisonsCure"
            value="Les soins thermaux"
            onChange={handleCheckboxChange}
          />
          <label>Les soins thermaux</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="raisonsCure"
            value="Le repos"
            onChange={handleCheckboxChange}
          />
          <label>Le repos</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="raisonsCure"
            value="Me détendre"
            onChange={handleCheckboxChange}
          />
          <label>Me détendre</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="raisonsCure"
            value="Visiter la station et ses environs"
            onChange={handleCheckboxChange}
          />
          <label>Visiter la station et ses environs</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="raisonsCure"
            value="La coupure avec le quotidien"
            onChange={handleCheckboxChange}
          />
          <label>La coupure avec le quotidien</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="raisonsCure"
            value="Rencontrer d'autres curistes"
            onChange={handleCheckboxChange}
          />
          <label>Rencontrer d'autres curistes</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="raisonsCure"
            value="Autre"
            onChange={handleCheckboxChange}
          />
          <label>Autre (précisez)</label>
          <input
            type="text"
            name="autreRaison"
            value={formData.autreRaison || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <button type="submit">Soumettre</button>
    </form>
  );
}

export default Survey;