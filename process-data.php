<?php

$reference = $_POST['reference'];
$quantity = $_POST['quantity'];

$server = 'localhost';
$user = 'root';
$password = '';
$dataBase = 'project_axialdb';
$current_data = date('d/m/Y');
$current_hour = date('H:i:s');

$conn = new mysqli($server, $user, $password, $dataBase);

if ($conn-> connect_error){
    die("Falha na conexão:" .$conn->connect_error);
}

$smtp = $conn -> prepare("INSERT INTO references_saved (reference, quantity, data, hora) VALUES (?, ?, ?, ?)");

$smtp ->bind_param("ssss",$reference, $quantity, $current_data, $current_hour);

if($smtp -> execute()){
    echo "Salvo no Banco de Dados";
}else{ echo "erro no envio:" .$smtp-> error;}

?>