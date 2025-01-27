<?php
require 'config.php';

header('Content-Type: application/json');

try {
    // Requête pour récupérer toutes les données de statistiques
    $stmt = $pdo->query("SELECT * FROM survey_data ORDER BY created_at DESC");
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
