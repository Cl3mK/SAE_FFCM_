<?php
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Adresse e-mail invalide.");
    }

    if (strlen($password) < 6) {
        echo "<script>alert('Le mot de passe doit contenir au moins 6 caractères.'); window.history.back();</script>";
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    try {
        $stmt = $pdo->prepare("INSERT INTO users (email, password) VALUES (:email, :password)");
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $hashedPassword);
        $stmt->execute();
        header("Location: http://localhost:5173/survey");
    } catch (PDOException $e) {
        if ($e->getCode() === "23000") {
            echo "<script>alert('Cette adresse e-mail est déjà utilisée.'); window.history.back();</script>";
        } else {
            die("Erreur lors de l'inscription : " . $e->getMessage());
        }
    }
} else {
    echo "Méthode non autorisée.";
}
?>
