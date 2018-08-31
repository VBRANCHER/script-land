<?php

include_once("banco_de_dados.php");





if (isset($_POST["email"])){
	$array = select("SELECT * FROM jogadores WHERE email='{$_POST["email"]}' AND senha='{$_POST["senha"]}'");
	
	if ($array == 0){
	
	echo "<script>alert ('Usuário e/ou senha incorretos');</script>";

	}
	else{
	
	$_SESSION["arrUsuario"] = $array[0];
	
	}
}

?>