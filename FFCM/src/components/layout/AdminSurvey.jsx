import React, { useEffect, useState } from 'react';

const AdminSurvey = () => {
    const [surveyData, setSurveyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/php/get_survey_data.php');
            const result = await response.json();
            setSurveyData(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Résultats du sondage</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Genre</th>
                        <th>Âge</th>
                        <th>Région</th>
                        <th>Déjà allé en cure</th>
                        <th>Adhérent FFCM</th>
                        <th>Découverte</th>
                        <th>Raisons</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {surveyData.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.nom}</td>
                            <td>{data.prenom}</td>
                            <td>{data.genre}</td>
                            <td>{data.age}</td>
                            <td>{data.region}</td>
                            <td>{data.dejaAlleEnCure}</td>
                            <td>{data.adherentFFCM}</td>
                            <td>{data.decouverteCure}</td>
                            <td>{data.raisonsCure}</td>
                            <td>{data.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminSurvey;