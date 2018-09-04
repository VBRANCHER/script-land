<html>

<head>

</head>

<body>

<?php

include_once("includes/banco_de_dados.php");
include_once("../index.html");

$arrayUsuarios = select("SELECT * FROM jogadores");

echo"<table border='5'>";
echo"<tr><th>Identificador</th>";
echo"<th>$_POST['nome']</th>";
echo"<th>$_POST['email']</th></tr>";
foreach($arrayUsuarios as $key=>$value){
	echo "<tr><td>".$value["idusuario"]."</td>";
	echo "<td>".$value $_POST['nome']."</td>";
	echo "<td>".$value $_POST['email']."</td></tr>";
}
echo"<table>";

?>


</body>

</html>