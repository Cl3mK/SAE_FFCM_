<?php
require 'config.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $userId = $_SESSION['user_id'];

    try {
        $stmt = $pdo->prepare("UPDATE survey_data SET 
            nom = :nom, prenom = :prenom, genre = :genre, age = :age, region = :region,
            dejaAlleEnCure = :dejaAlleEnCure, adherentFFCM = :adherentFFCM, 
            decouverteCure = :decouverteCure, raisonsCure = :raisonsCure, 
            updated_at = CURRENT_TIMESTAMP
            WHERE user_id = :user_id");
        $stmt->execute([
            ':nom' => $input['nom'],
            ':prenom' => $input['prenom'],
            ':genre' => $input['genre'],
            ':age' => $input['age'],
            ':region' => $input['region'],
            ':dejaAlleEnCure' => $input['dejaAlleEnCure'],
            ':adherentFFCM' => $input['adherentFFCM'],
            ':decouverteCure' => implode(',', $input['decouverteCure']),
            ':raisonsCure' => implode(',', $input['raisonsCure']),
            ':user_id' => $userId,
        ]);

        echo json_encode(['status' => 'success', 'message' => 'Formulaire mis à jour.']);
    } catch (PDOException $e) {
        echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Méthode non autorisée.']);
}
?>
