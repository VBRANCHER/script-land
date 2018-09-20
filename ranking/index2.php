<html>

<head>

</head>

<body>


<?php
include_once("/../includes/banco_de_dados.php");
	/*
	$arrayProdutos = select("SELECT * FROM usuarios as u 
	INNER JOIN usuario_personagem as p ON(u.idusuario=p.idusuario) ");


	$inseriu = php_insert("INSERT INTO usuarios VALUES(DEFAULT, 'gabriel')");



	echo sql_delete_update("UPDATE usuarios SET nome='EduBoy' WHERE nome='gabriel'");
	echo sql_delete_update("DELETE usuarios WHERE nome='Eduboy'");
	*/

	

echo "<table border='1'>";
echo "<tr>";
echo "<th>Identificador</th>";
echo "<th>Nome</th>";
echo "<th>Email</th>";
echo "</tr>";


foreach($arrayUsuarios as $key => $value){
	echo "<tr><td>".$value["idusuario"]."</td>";
	echo "<td>".$value["nome"]."</td>";
	echo "<td>".$value["email"]."</td></tr>";
}

echo "</table>";
?>

<form action="index2.php" method="post" name="formUsuario" >
		
		</br></br>
		<input type="text" placeholder="ID do usuário para alteração" name="aNome" required /></br></br>
		<input type="text" placeholder="Novo Nome" name="nNome" required /></br></br>
		<input type="email" placeholder="Novo E-mail" name="nEmail" required /></br></br>
		
		
		<input type="submit" />
		
	</form>

</body>

</html>