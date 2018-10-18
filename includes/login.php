<?php

include_once("banco_de_dados.php");

if(isset($_POST["inputEmail"])){
	
	$arr = select("SELECT * FROM jogadores WHERE email='{$_POST['inputEmail']}' AND senha='{$_POST['inputPassword']}'");
	
	if($arr == 0){
		
		echo "<script>alert('Usuário e/ou senha incoretos!');</script>";
		
	}
	else{
	
		$_SESSION["arrUsuario"] = $arr[0];
		$_SESSION["arrProgresso"] = select("SELECT * FROM perfis WHERE jogadores_id='{$_SESSION['arrUsuario']["id"]}'")[0];
		
	}
}


?>