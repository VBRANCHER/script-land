<?php

include_once("banco_de_dados.php");
//include_once("index.php");

if(isset($_SESSION["arrUsuario"])){
	
	$array = select("SELECT * FROM jogadores WHERE email='{$_SESSION['arrUsuario']['email']}' AND senha='{$_SESSION['arrUsuario']['senha']}'");
	
	if($array == 0){
		header("location:index.php");
		
	}else{
		
		header("location:index11.php");
		
	}
	
}

?>