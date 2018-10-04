<?php 
session_start();
include_once("banco_de_dados.php");

if(isset($_GET["moeda"]))
{
	sql_delete_update("UPDATE perfis SET moedas = '{$_GET["moeda"]}' WHERE jogadores_id={$_SESSION["arrUsuario"]["id"]}");
}

if(isset($_GET["vida"])){
	sql_delete_update("UPDATE perfis SET vida = '{$_GET["vida"]}' WHERE jogadores_id={$_SESSION["arrUsuario"]["id"]}");
}

?>