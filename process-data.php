<!-- <?php


//PEGANDO OS DADOS VINDOS DO FORMULÁRIO

$reference = $_POST['reference'];
$quantity = $_POST['quantity'];
$date = date('d/m/Y');
$hour = date('H:i:s');

//CONFUGURAÇÕES DE CREDENCIAIS
$server = 'localhost';
$user = 'root';
$password = '';
$database = 'project_axialdb';

//CONEXÃO COM O BANCO DE DADOS
$conn = new mysqli($server, $user, $password, $database);

if($conn->connect_error){
    die("FALHA NA CONEXÃO COM O BANCO DE DADOS:" .$conn->connect_error);
}

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
