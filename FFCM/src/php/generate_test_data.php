<?php
require 'config.php';


$genres = ['Homme', 'Femme', 'Autre'];
$regions = [
    'Île-de-France', 'Bretagne', 'Occitanie', 'Provence-Alpes-Côte d\'Azur', 
    'Auvergne-Rhône-Alpes', 'Nouvelle-Aquitaine', 'Hauts-de-France', 
    'Centre-Val de Loire', 'Pays de la Loire', 'Grand Est', 
    'Normandie', 'Corse', 'Bourgogne-Franche-Comté'
];
$ouiNon = ['Oui', 'Non'];
$decouverteCureOptions = ['Médecin', 'Internet', 'Entourage', 'Autre'];
$raisonsCureOptions = ['Les soins thermaux', 'Le repos', 'Me détendre', 'Visiter la station et ses environs', 'La coupure avec le quotidien', 'Rencontrer d\'autres curistes'];

try {
    $pdo->beginTransaction(); 

    
    $nombreDonnees = 100;

    for ($i = 0; $i < $nombreDonnees; $i++) {
        
        $nom = "Nom" . rand(1, 1000);
        $prenom = "Prenom" . rand(1, 1000);
        $genre = $genres[array_rand($genres)];
        $age = rand(18, 80);
        $region = $regions[array_rand($regions)];
        $habiteEtranger = rand(0, 1);
        $dejaAlleEnCure = $ouiNon[array_rand($ouiNon)];
        $adherentFFCM = $ouiNon[array_rand($ouiNon)];

        
        $decouverteCure = array_rand(array_flip($decouverteCureOptions), rand(1, 3));
        $raisonsCure = array_rand(array_flip($raisonsCureOptions), rand(1, 4));

        
        $decouverteCureStr = is_array($decouverteCure) ? implode(',', $decouverteCure) : $decouverteCure;
        $raisonsCureStr = is_array($raisonsCure) ? implode(',', $raisonsCure) : $raisonsCure;

        
        $stmt = $pdo->prepare("
            INSERT INTO survey_data (
                user_id, nom, prenom, genre, age, region, 
                habiteEtranger, dejaAlleEnCure, adherentFFCM, 
                decouverteCure, raisonsCure, created_at, updated_at
            ) VALUES (
                :user_id, :nom, :prenom, :genre, :age, :region, 
                :habiteEtranger, :dejaAlleEnCure, :adherentFFCM, 
                :decouverteCure, :raisonsCure, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
            )
        ");

        
        $stmt->execute([
            ':user_id' => 1,
            ':nom' => $nom,
            ':prenom' => $prenom,
            ':genre' => $genre,
            ':age' => $age,
            ':region' => $region,
            ':habiteEtranger' => $habiteEtranger,
            ':dejaAlleEnCure' => $dejaAlleEnCure,
            ':adherentFFCM' => $adherentFFCM,
            ':decouverteCure' => $decouverteCureStr,
            ':raisonsCure' => $raisonsCureStr,
        ]);
    }

    $pdo->commit(); 
    echo "Jeu de données généré avec succès !";
} catch (PDOException $e) {
    $pdo->rollBack(); 
    die("Erreur lors de la génération des données : " . $e->getMessage());
}
