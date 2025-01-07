<?php
require 'debug.php';
require 'identity.php';

$trousseau = "bdd/users.bd";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    debugForm($_POST, 'post');
    if(checkAccount($trousseau, $_POST) == 2){
        echo "Coucou monsieur l'admin.";
    }
    elseif(checkAccount($trousseau, $_POST) == 1) {
        echo "Coucou monsieur normal.";
    }
    else{
        echo "coucou à toi inconnu mais tu rentres pas par contre.";
    }
}
else {
    echo "Pas de données disponibles";
}