<?php
require 'config.php';


$sql_users = "CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    is_admin BOOLEAN DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

$sql_survey = "CREATE TABLE IF NOT EXISTS survey_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    nom TEXT NOT NULL,
    prenom TEXT NOT NULL,
    genre TEXT NOT NULL,
    age INTEGER NOT NULL,
    region TEXT NOT NULL,
    habiteEtranger BOOLEAN DEFAULT 0,
    dejaAlleEnCure TEXT NOT NULL,
    adherentFFCM TEXT NOT NULL,
    decouverteCure TEXT NOT NULL,
    raisonsCure TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
)";

$sql_trigger = "CREATE TRIGGER IF NOT EXISTS update_survey_data_updated_at
AFTER UPDATE ON survey_data
FOR EACH ROW
BEGIN
    UPDATE survey_data
    SET updated_at = CURRENT_TIMESTAMP
    WHERE id = OLD.id;
END";



try {

    $pdo->exec($sql_users);
    echo "Table `users` créée avec succès.<br>";

    $pdo->exec($sql_survey);
    echo "Table `statistics` créée avec succès.<br>";

    $pdo->exec($sql_trigger);
    echo "Trigger `update_survey_data_updated_at` créée avec succès.<br>";
} catch (PDOException $e) {
    die("Erreur lors de la création des tables : " . $e->getMessage());
}
?>
