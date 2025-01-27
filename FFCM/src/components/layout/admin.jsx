import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import "@css/admin/admin.css"; 

function Admin() {
  const [viewMode, setViewMode] = useState("list"); // "list" ou "charts"
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // État pour gérer le tri avec tri par défaut sur "nom"
  const [sortConfig, setSortConfig] = useState({ key: "nom", direction: "asc" });

  useEffect(() => {
    fetch("/php/get_admin_data.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setData(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement des données...</p>;
  if (error) return <p>Erreur : {error}</p>;

  // Fonction pour trier les données
  const sortedUsers = () => {
    if (!sortConfig.key) return data.users;

    return [...data.users].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      
      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  // Fonction pour changer la configuration du tri
  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Fonction pour générer les données pour un graphique
  const generateChartData = (labels, data) => ({
    labels: labels,
    datasets: [
      {
        label: "Pourcentage",
        data: data,
        backgroundColor: [
          "#AFDDE2",  // #AFDDE2
          "#333298",  // #333298
          "#6495ED",  // Cornflower Blue (bleu clair)
          "#4682B4",  // Steel Blue (bleu acier)
          "#00BFFF",  // Deep Sky Blue (bleu profond)
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="admin-container">
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${viewMode === "list" ? "active" : ""}`}
          onClick={() => setViewMode("list")}
        >
          Voir la liste
        </button>
        <button
          className={`toggle-button ${viewMode === "charts" ? "active" : ""}`}
          onClick={() => setViewMode("charts")}
        >
          Voir les graphiques
        </button>
      </div>

      {viewMode === "list" ? (
        <div className="user-list">
          <h2>Liste des utilisateurs</h2>
          <table>
            <thead>
              <tr>
                <th
                  onClick={() => requestSort("nom")}
                  className={sortConfig.key === "nom" ? "sorted" : ""}
                >
                  Nom
                </th>
                <th
                  onClick={() => requestSort("prenom")}
                  className={sortConfig.key === "prenom" ? "sorted" : ""}
                >
                  Prénom
                </th>
                <th
                  onClick={() => requestSort("genre")}
                  className={sortConfig.key === "genre" ? "sorted" : ""}
                >
                  Genre
                </th>
                <th
                  onClick={() => requestSort("age")}
                  className={sortConfig.key === "age" ? "sorted" : ""}
                >
                  Âge
                </th>
                <th
                  onClick={() => requestSort("region")}
                  className={sortConfig.key === "region" ? "sorted" : ""}
                >
                  Région
                </th>
                <th
                  onClick={() => requestSort("habiteEtranger")}
                  className={sortConfig.key === "habiteEtranger" ? "sorted" : ""}
                >
                  Habite à l'étranger
                </th>
                <th
                  onClick={() => requestSort("dejaAlleEnCure")}
                  className={sortConfig.key === "dejaAlleEnCure" ? "sorted" : ""}
                >
                  Déjà allé en cure
                </th>
                <th
                  onClick={() => requestSort("adherentFFCM")}
                  className={sortConfig.key === "adherentFFCM" ? "sorted" : ""}
                >
                  Adhérent FFCM
                </th>
                <th
                  onClick={() => requestSort("decouverteCure")}
                  className={sortConfig.key === "decouverteCure" ? "sorted" : ""}
                >
                  Découverte Cure
                </th>
                <th
                  onClick={() => requestSort("raisonsCure")}
                  className={sortConfig.key === "raisonsCure" ? "sorted" : ""}
                >
                  Raisons Cure
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers().map((user, index) => (
                <tr key={index}>
                  <td>{user.nom}</td>
                  <td>{user.prenom}</td>
                  <td>{user.genre}</td>
                  <td>{user.age}</td>
                  <td>{user.region}</td>
                  <td>{user.habiteEtranger ? "Oui" : "Non"}</td>
                  <td>{user.dejaAlleEnCure}</td>
                  <td>{user.adherentFFCM}</td>
                  <td>{user.decouverteCure}</td>
                  <td>{user.raisonsCure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="charts_large">
          <h2>Statistiques des utilisateurs</h2>
          <div className="charts">
            <div className="chart-container">
              <h3>Genres</h3>
              <Bar data={generateChartData(data.chart.genders.labels, data.chart.genders.data)} />
            </div>

            <div className="chart-container">
              <h3>Âges</h3>
              <Bar data={generateChartData(data.chart.ages.labels, data.chart.ages.data)} />
            </div>

            <div className="chart-container">
              <h3>Régions</h3>
              <Pie data={generateChartData(data.chart.regions.labels, data.chart.regions.data)} />
            </div>

            <div className="chart-container">
              <h3>Habite à l'étranger</h3>
              <Bar data={generateChartData(data.chart.foreign.labels, data.chart.foreign.data)} />
            </div>

            <div className="chart-container">
              <h3>Déjà allé en cure</h3>
              <Bar data={generateChartData(data.chart.cure.labels, data.chart.cure.data)} />
            </div>

            <div className="chart-container">
              <h3>Adhérents FFCM</h3>
              <Bar data={generateChartData(data.chart.members.labels, data.chart.members.data)} />
            </div>

            <div className="chart-container">
              <h3>Découverte Cure</h3>
              <Pie data={generateChartData(data.chart.discovery.labels, data.chart.discovery.data)} />
            </div>

            <div className="chart-container">
              <h3>Raisons Cure</h3>
              <Pie data={generateChartData(data.chart.reasons.labels, data.chart.reasons.data)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
