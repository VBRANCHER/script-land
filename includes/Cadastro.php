<?php

include_once("banco_de_dados.php");

if (isset($_POST["email"])){
	
	$array = select("SELECT * FROM jogadores WHERE email='{$_POST["email"]}' AND senha='{$_POST["senha"]}'");
	
	if ($array != 0){
	
		echo "<script>alert ('Erro ao cadastrar, o e-mail já está cadastrado');</script>";

	}
	else{
		
		$insert = "INSERT INTO jogadores VALUES (DEFAULT, '{$_POST["name"]}', 'teste', '{$_POST["email"]}', '{$_POST["senha"]}', '2018-09-10')";
		$id = php_insert($insert);
		
		$insert2 = "INSERT INTO perfis VALUES (DEFAULT, '1', '0', '1', '0', '3', '0', {$id})";
		php_insert($insert2);
		
		$insert3 = "INSERT INTO perguntas VALUES (DEFAULT, '0', '0', '0')";
		php_insert($insert3);
	}
}

?>