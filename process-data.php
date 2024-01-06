<?php

date_default_timezone_set('America/Sao_Paulo');


//PEGANDO OS DADOS VINDOS DO FORMULÁRIO

$reference = $_POST['reference'];
$quantity = $_POST['quantity'];
$date = date('d/m/Y');
$hour = date('H:i:s');




//CONFUGURAÇÕES DE CREDENCIAIS
$server = '127.0.0.1';
$user = 'root';
$password = '';
$database = 'project_axialdb';

//CONEXÃO COM O BANCO DE DADOS
$conn = new mysqli($server, $user, $password, $database);

if($conn->connect_error){
    die("FALHA NA CONEXÃO COM O BANCO DE DADOS:" .$conn->connect_error);
}

$statement = $conn->prepare("INSERT INTO references_saved (referencia, quantidade, data, hora) VALUES (?,?,?,?)");

$statement->bind_param("ssss", $reference, $quantity, $date, $hour);
exit(var_dump($reference));


if($statement->execute()){
    echo "Referência salva no banco de dados!";
}else {
    echo "Erro ao salvar a referência no banco de Dados" .$statement->error;
}

$statement->close();
$conn->close();

?>