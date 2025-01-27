<?php
require 'config.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $requiredFields = ['nom', 'prenom', 'genre', 'age', 'region', 'dejaAlleEnCure', 'adherentFFCM'];
    foreach ($requiredFields as $field) {
        if (empty($data[$field])) {
            echo json_encode(['status' => 'error', 'message' => "Le champ $field est requis."]);
            exit();
        }
    }

    $user_id = $_SESSION['user_id'] ?? null;
    $nom = $data['nom'];
    $prenom = $data['prenom'];
    $genre = $data['genre'];
    $age = (int) $data['age'];
    $region = $data['region'];
    $habiteEtranger = $data['habiteEtranger'] ? 1 : 0;
    $dejaAlleEnCure = $data['dejaAlleEnCure'];
    $adherentFFCM = $data['adherentFFCM'];
    $decouverteCure = isset($data['decouverteCure']) ? implode(',', $data['decouverteCure']) : '';
    $raisonsCure = isset($data['raisonsCure']) ? implode(',', $data['raisonsCure']) : '';

    try {
        $stmt = $pdo->prepare("
            INSERT INTO survey_data 
            (user_id, nom, prenom, genre, age, region, habiteEtranger, dejaAlleEnCure, adherentFFCM, decouverteCure, raisonsCure, created_at) 
            VALUES 
            (:user_id, :nom, :prenom, :genre, :age, :region, :habiteEtranger, :dejaAlleEnCure, :adherentFFCM, :decouverteCure, :raisonsCure, DATETIME('now'))
        ");
        $stmt->execute([
            ':user_id' => $user_id,
            ':nom' => $nom,
            ':prenom' => $prenom,
            ':genre' => $genre,
            ':age' => $age,
            ':region' => $region,
            ':habiteEtranger' => $habiteEtranger,
            ':dejaAlleEnCure' => $dejaAlleEnCure,
            ':adherentFFCM' => $adherentFFCM,
            ':decouverteCure' => $decouverteCure,
            ':raisonsCure' => $raisonsCure,
        ]);

        echo json_encode(['status' => 'success', 'message' => 'Données enregistrées avec succès.', "redirect" => "/login"]);
    } catch (PDOException $e) {
        echo json_encode(['status' => 'error', 'message' => 'Erreur : ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Méthode non autorisée.']);
}
?>

