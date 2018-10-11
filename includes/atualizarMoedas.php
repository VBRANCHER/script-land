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

//

if(isset($_GET["bomba"])){
	sql_delete_update("UPDATE perguntas SET bomba = '{$_GET["bomba"]}' WHERE id={$_SESSION["arrUsuario"]["id"]}");
}

if(isset($_GET["segundaChance"])){
	sql_delete_update("UPDATE perguntas SET segunda_chance = '{$_GET["segundaChance"]}' WHERE id={$_SESSION["arrUsuario"]["id"]}");
}

if(isset($_GET["pularPergunta"])){
	sql_delete_update("UPDATE perguntas SET pular_pergunta = '{$_GET["pularPergunta"]}' WHERE id={$_SESSION["arrUsuario"]["id"]}");
}

if(isset($_GET["score"])){
	sql_delete_update("UPDATE perfis SET score = '{$_GET["score"]}' WHERE id={$_SESSION["arrUsuario"]["id"]}");
}
?>