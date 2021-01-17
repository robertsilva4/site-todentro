<?php

function conn(){
    $host = "localhost";
    $port = 3308;
    $user = "root";
    $passwd = "admin123";
    $db = "db-todentro";

    try {
        $connection = new PDO("mysql:host={$host};port={$port};dbname={$db}", $user, $passwd);
        return $connection;
    } catch (Exception $ex) {
        echo "Ocorreu o seguinte erro {$ex->getMessage()}";
    }
}




