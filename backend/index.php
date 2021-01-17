<?php

require_once ('./rota.php');

header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

if ($_GET) {
    $url = trim($_GET['url'], '/');
    $recurso = explode('/', $url);
    $metodo = $_SERVER['REQUEST_METHOD'];
    rota ($metodo, $recurso);
}else{
    echo (json_encode(array('status'=> 'error', 'data' => 'Digite um recurso')));
}