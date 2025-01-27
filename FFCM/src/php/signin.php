<?php
require 'config.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    try {
        
        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['is_admin'] = (bool)$user['is_admin'];

            if ($_SESSION['is_admin']) {
                
                header("Location: http://localhost:5173/admin");
            } else {
                
                $surveyStmt = $pdo->prepare("SELECT * FROM survey_data WHERE user_id = :user_id");
                $surveyStmt->bindParam(':user_id', $_SESSION['user_id']);
                $surveyStmt->execute();
                $surveyData = $surveyStmt->fetch(PDO::FETCH_ASSOC);

                if ($surveyData) {
                    
                    header("Location: http://localhost:5173/update-survey");
                } else {
                    
                    header("Location: http://localhost:5173/survey");
                }
            }
            exit();
        } else {
            echo "<script>alert('Adresse e-mail ou mot de passe incorrect.'); window.history.back();</script>";
        }
    } catch (PDOException $e) {
        die("Erreur lors de la connexion : " . $e->getMessage());
    }
} else {
    echo "Méthode non autorisée.";
}
?>
