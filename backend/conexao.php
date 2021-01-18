<?php

function conn(){
    $host = "3.93.225.143";
    $port = 3306;
    $user = "admin";
    $passwd = "admin123";
    $db = "db-todentro";

    try {
        $connection = new PDO("mysql:host={$host};port={$port};dbname={$db}", $user, $passwd);
        return $connection;
    } catch (Exception $ex) {
        echo "Ocorreu o seguinte erro {$ex->getMessage()}";
    }
}




