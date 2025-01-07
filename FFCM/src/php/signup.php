<?php
require 'debug.php';
require 'identity.php';

$trousseau = "bdd/users.db";

if(!file_exists($trousseau)) {
    createTrousseau($trousseau);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    debugForm($_POST, 'post');
    addAccount($trousseau, $_POST);
}
else {
    echo "Pas de données disponibles";
}