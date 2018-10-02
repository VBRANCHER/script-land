<?php

include_once("banco_de_dados.php");

if(isset($_POST["inputEmail"])){
	
	$arr = select("SELECT * FROM jogadores WHERE email='{$_POST['inputEmail']}' AND senha='{$_POST['inputPassword']}'");
	
	if($arr == 0){
		
		echo "<script>alert('Usuário e/ou senha incoretos!');</script>";
		
	}
	else{
		print_r("oi");
		$_SESSION["arrUsuario"] = $arr[0];
	}
}


?>