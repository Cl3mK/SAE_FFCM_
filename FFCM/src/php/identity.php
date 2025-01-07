<?php

$dbFile = __DIR__ . DIRECTORY_SEPARATOR . 'bdd' . DIRECTORY_SEPARATOR . 'users.db';

function createDatabase(string $dbFile): void {
    $directory = dirname($dbFile);
    if (!is_dir($directory)) {
        mkdir($directory, 0777, true);
    }
    $pdo = new PDO("sqlite:$dbFile");

    // Création de la table "users" si elle n'existe pas
    $pdo->exec('
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        );
    ');
}

function addAccount(string $dbFile, array $donnees): void {
    try {
        $pdo = new PDO("sqlite:$dbFile");

        $stmt = $pdo->prepare('SELECT COUNT(*) FROM users WHERE email = :email');
        $stmt->execute(['email' => $donnees['email']]);
        if ($stmt->fetchColumn() > 0) {
            echo "L'email est déjà utilisé.";
            return;
        }

        $hashedPassword = password_hash($donnees['password'], PASSWORD_DEFAULT);

        $stmt = $pdo->prepare('
            INSERT INTO users (username, email, password)
            VALUES (:username, :email, :password);
        ');
        $stmt->execute([
            'username' => $donnees['username'],
            'email' => $donnees['email'],
            'password' => $hashedPassword
        ]);

        echo "Compte créé avec succès.";
    } catch (PDOException $e) {
        echo "Erreur : " . $e->getMessage();
    }
}

function checkAccount(string $dbFile, array $donnees): int {
    try {
        $pdo = new PDO("sqlite:$dbFile");

        $stmt = $pdo->prepare('SELECT password FROM users WHERE email = :email');
        $stmt->execute(['email' => $donnees['email']]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($result && password_verify($donnees['password'], $result['password'])) {
            if($result['admin']) {
                return 2;
            }
            else{
                return 1;
            }
        }
    } catch (PDOException $e) {
        echo "Erreur : " . $e->getMessage();
    }

    return 0;
}
