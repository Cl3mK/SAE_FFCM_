<?php
require 'config.php';

header('Content-Type: application/json');

try {
    // Récupérer tous les utilisateurs
    $stmt = $pdo->query("SELECT * FROM survey_data");
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Statistiques par genre
    $genreStats = $pdo->query("
        SELECT genre, COUNT(*) * 100.0 / (SELECT COUNT(*) FROM survey_data) AS percentage 
        FROM survey_data 
        GROUP BY genre
    ")->fetchAll(PDO::FETCH_ASSOC);

    // Statistiques par âge
    $ageStats = $pdo->query("
        SELECT age, COUNT(*) * 100.0 / (SELECT COUNT(*) FROM survey_data) AS percentage 
        FROM survey_data 
        GROUP BY age
    ")->fetchAll(PDO::FETCH_ASSOC);

    // Statistiques par région
    $regionStats = $pdo->query("
        SELECT region, COUNT(*) * 100.0 / (SELECT COUNT(*) FROM survey_data) AS percentage 
        FROM survey_data 
        GROUP BY region
    ")->fetchAll(PDO::FETCH_ASSOC);

    // Statistiques habite à l'étranger
    $foreignStats = $pdo->query("
        SELECT habiteEtranger, COUNT(*) * 100.0 / (SELECT COUNT(*) FROM survey_data) AS percentage 
        FROM survey_data 
        GROUP BY habiteEtranger
    ")->fetchAll(PDO::FETCH_ASSOC);

    // Statistiques déjà allé en cure
    $cureStats = $pdo->query("
        SELECT dejaAlleEnCure, COUNT(*) * 100.0 / (SELECT COUNT(*) FROM survey_data) AS percentage 
        FROM survey_data 
        GROUP BY dejaAlleEnCure
    ")->fetchAll(PDO::FETCH_ASSOC);

    // Statistiques adhérents FFCM
    $memberStats = $pdo->query("
        SELECT adherentFFCM, COUNT(*) * 100.0 / (SELECT COUNT(*) FROM survey_data) AS percentage 
        FROM survey_data 
        GROUP BY adherentFFCM
    ")->fetchAll(PDO::FETCH_ASSOC);

    // Découverte cure : extraction des valeurs multiples
    $discoveryRaw = $pdo->query("SELECT decouverteCure FROM survey_data")->fetchAll(PDO::FETCH_COLUMN);
    $discoveryCounts = [];
    foreach ($discoveryRaw as $row) {
        $values = explode(',', $row); // Séparer les valeurs multiples
        foreach ($values as $value) {
            $value = trim($value);
            if (!isset($discoveryCounts[$value])) {
                $discoveryCounts[$value] = 0;
            }
            $discoveryCounts[$value]++;
        }
    }
    $discoveryStats = [];
    $totalDiscovery = array_sum($discoveryCounts);
    foreach ($discoveryCounts as $key => $count) {
        $discoveryStats[] = [
            'label' => $key,
            'percentage' => ($count / $totalDiscovery) * 100,
        ];
    }

    // Raisons cure : extraction des valeurs multiples
    $reasonsRaw = $pdo->query("SELECT raisonsCure FROM survey_data")->fetchAll(PDO::FETCH_COLUMN);
    $reasonCounts = [];
    foreach ($reasonsRaw as $row) {
        $values = explode(',', $row); // Séparer les valeurs multiples
        foreach ($values as $value) {
            $value = trim($value);
            if (!isset($reasonCounts[$value])) {
                $reasonCounts[$value] = 0;
            }
            $reasonCounts[$value]++;
        }
    }
    $reasonStats = [];
    $totalReasons = array_sum($reasonCounts);
    foreach ($reasonCounts as $key => $count) {
        $reasonStats[] = [
            'label' => $key,
            'percentage' => ($count / $totalReasons) * 100,
        ];
    }

    // Préparer les données pour le frontend
    $chartData = [
        'genders' => [
            'labels' => array_column($genreStats, 'genre'),
            'data' => array_column($genreStats, 'percentage'),
        ],
        'ages' => [
            'labels' => array_column($ageStats, 'age'),
            'data' => array_column($ageStats, 'percentage'),
        ],
        'regions' => [
            'labels' => array_column($regionStats, 'region'),
            'data' => array_column($regionStats, 'percentage'),
        ],
        'foreign' => [
            'labels' => array_column($foreignStats, 'habiteEtranger'),
            'data' => array_column($foreignStats, 'percentage'),
        ],
        'cure' => [
            'labels' => array_column($cureStats, 'dejaAlleEnCure'),
            'data' => array_column($cureStats, 'percentage'),
        ],
        'members' => [
            'labels' => array_column($memberStats, 'adherentFFCM'),
            'data' => array_column($memberStats, 'percentage'),
        ],
        'discovery' => [
            'labels' => array_column($discoveryStats, 'label'),
            'data' => array_column($discoveryStats, 'percentage'),
        ],
        'reasons' => [
            'labels' => array_column($reasonStats, 'label'),
            'data' => array_column($reasonStats, 'percentage'),
        ],
    ];

    echo json_encode([
        'users' => $users,
        'chart' => $chartData,
    ]);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
