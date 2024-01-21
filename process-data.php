<!-- <?php

<<<<<<< HEAD
=======
date_default_timezone_set('America/Sao_Paulo');

>>>>>>> c070d6b545c6c36789482634c1b3828528f15854

//PEGANDO OS DADOS VINDOS DO FORMULÁRIO

$reference = $_POST['reference'];
$quantity = $_POST['quantity'];
$date = date('d/m/Y');
$hour = date('H:i:s');

<<<<<<< HEAD
//CONFUGURAÇÕES DE CREDENCIAIS
$server = 'localhost';
=======



//CONFUGURAÇÕES DE CREDENCIAIS
$server = '127.0.0.1';
>>>>>>> c070d6b545c6c36789482634c1b3828528f15854
$user = 'root';
$password = '';
$database = 'project_axialdb';

//CONEXÃO COM O BANCO DE DADOS
$conn = new mysqli($server, $user, $password, $database);

if($conn->connect_error){
    die("FALHA NA CONEXÃO COM O BANCO DE DADOS:" .$conn->connect_error);
}

<<<<<<< HEAD
$smtp = $conn->prepare("INSERT INTO references_saved (referencia, quantidade, data, hora) VALUES (?,?,?,?)");
$smtp->bind_param("ssss", $reference, $quantity, $date, $hour);

if($smtp->execute()){
    echo "Referência salva no banco de dados!";
}else {
    echo "Erro ao salvar a referência no banco de Dados" .$smtp->error;
}

$smtp->close();
$conn->close();

?> -->
=======
$statement = $conn->prepare("INSERT INTO references_saved (referencia, quantidade, data, hora) VALUES (?,?,?,?)");

$statement->bind_param("ssss", $reference, $quantity, $date, $hour);
(var_dump($reference));


if($statement->execute()){
    echo "Referência salva no banco de dados!";
}else {
    echo "Erro ao salvar a referência no banco de Dados" .$statement->error;
}

$statement->close();
$conn->close();

?> -->
>>>>>>> c070d6b545c6c36789482634c1b3828528f15854
