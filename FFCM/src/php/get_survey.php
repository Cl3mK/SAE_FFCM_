<?php
require 'config.php';
session_start();

$userId = $_SESSION['user_id'];

try {
    $stmt = $pdo->prepare("SELECT * FROM survey_data WHERE user_id = :user_id");
    $stmt->bindParam(':user_id', $userId);
    $stmt->execute();
    $data = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($data);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
