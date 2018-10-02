<?php 
session_start();
include_once("banco_de_dados.php");

if(isset($_GET["moeda"]))
{
	sql_delete_update("UPDATE perfis SET moedas = '{$_GET["moeda"]}' WHERE jogadores_id={$_SESSION["arrUsuario"]["id"]}");
	sql_delete_update("UPDATE perfis SET moedas = '{$_GET["vidas"]}' WHERE jogadores_id={$_SESSION["arrUsuario"]["id"]}");
	
}


?>