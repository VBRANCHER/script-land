<?php
session_start();
include_once("includes/verifica_logado.php"); 
?>

<html> 
<head> 

	<link rel="stylesheet" type="text/css "href="css/bootstrap/bootstrap.css"/>
	<link rel="stylesheet" type="text/css "href="css/signin.css"/>
	
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
	<script type="text/javascript" src="js/bootstrap/bootstrap.js"></script>
	
    <meta charset="UTF-8" />

	<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Script Land</title>
    <script src="js/phaser.min.js"></script>
	<script src="js/lugar_legal.js"></script>
	<script src="js/loja.js"></script>
	<script src="js/vilao1/vitoria.js"></script>
	<script src="js/vilao2/vitoria2.js"></script>
	<script src="js/vilao3/vitoria3.js"></script>
    <script src="js/vilao1/teste.js"></script>
    <script src="js/vilao1/teste2.js"></script>
    <script src="js/vilao1/teste3.js"></script>
    <script src="js/vilao2/teste4.js"></script>
    <script src="js/vilao2/teste5.js"></script>
    <script src="js/vilao2/teste6.js"></script>
    <script src="js/vilao2/teste7.js"></script>
    <script src="js/vilao3/teste8.js"></script>
	<script src="js/vilao3/teste9.js"></script>
	<script src="js/vilao3/teste10.js"></script>
	<script src="js/vilao3/teste11.js"></script>
    <script src="js/spawn.js"></script>
	<script src="js/rio_legal_2.js"></script>
	<script src="js/lago_legal.js"></script>
	<script src="js/arvores_legais.js"></script>
	<script src="js/rio_legal.js"></script>
	<script src="js/tutorial.js"></script>
	<script src="js/tutorial2.js"></script>
	<script src="js/salvar.js"></script>
	<script src="js/loja_dentro.js"></script>
	<script src="js/vilao1/game_over.js"></script>
	<script src="js/vilao2/game_over2.js"></script>
	<script src="js/vilao3/game_over3.js"></script>
	<script src="js/selecionaPersonagem.js"></script>
	
    <style type="text/css">
        body {
            margin: 0;
        }
		
		canvas {
			margin: 0 auto;
			margin-top: 65px;
			display: block;
		}

	</style>
</head>
<body style="background-color: #000000" onload="carregarMoeda()">

<script type="text/javascript">

var jean = 0;
var juju = 0;
var john = 0;
var personagem = 0;
var totalMoedas = 0;
var pularPergunta = 0;
var segundaChance = 0;
var bomba = 0;
var vidasRestantes = 3;
var score = 0;
var testeObj = new teste();
var testeObj2 = new teste2();
var testeObj3 = new teste3();
var testeObj4 = new teste4();
var testeObj5 = new teste5();
var testeObj6 = new teste6();
var testeObj7 = new teste7();
var testeObj8 = new teste8();
var testeObj9 = new teste9();
var testeObj10 = new teste10();
var testeObj11 = new teste11();
var lojaObj = new loja();
var spawnObj = new spawn();
var lago_legalObj = new lago_legal();
var lugar_legalObj = new lugar_legal();

var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
	
    physics: {
        default: 'arcade',
        arcade: {
			gravity: { y: 0 },
            debug: false
        }
    },
	
	scene: [selecionaPersonagem, tutorial, tutorial2, lojaObj, spawnObj, testeObj, testeObj2, testeObj3,
	testeObj4, testeObj5, testeObj6, testeObj7, testeObj8, testeObj9, testeObj10, testeObj11, vitoria, vitoria2, vitoria3, 
	loja_dentro, game_over, game_over2, game_over3, arvores_legais, rio_legal, rio_legal_2, lago_legalObj, salvar, lugar_legalObj]
	
};
var game = new Phaser.Game(config);
game.scene.start(selecionaPersonagem);

function carregarMoeda(){
	document.getElementById("moedas").innerHTML = "Moedas: " + totalMoedas;
	
	document.getElementById("score").innerHTML = "Pontos: " + score;
	
	var xmlhttp = new XMLHttpRequest();
		
		
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			//this.responseText;
		
		}
	};
	
	xmlhttp.open("GET", "includes/atualizarMoedas.php?moeda=" + totalMoedas, true);
	xmlhttp.send();
	
	xmlhttp.open("GET", "includes/atualizarMoedas.php?vida=" + vidasRestantes, true);
	xmlhttp.send();
	
	xmlhttp.open("GET", "includes/atualizarMoedas.php?score=" + score, true);
	xmlhttp.send();
}

</script>

<div style="position: absolute">
	<nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light" style="background-color: #FEFEFE !important">
		<a class="navbar-brand" href="#">
			<img src="assets/icone.png" height="50px" alt="">
		</a>

		<div class="collapse navbar-collapse" id="navbarNav">
		
			<ul class="navbar-nav mr-auto">
		   
				<li class="nav-item">
					<a style="margin-left: 30px; margin-right: 20px;" class="nav-text" id="moedas"><script>Moedas: 0</script></a>
					<a style="margin-left: 20px; margin-right: 20px;" class="nav-text" id="score"><script>Pontos: 0</script></a>
				</li>
				
			</ul>
			
			<button type="button" class="btn btn-outline-primary mr-4 my-sm-0" data-toggle="modal" data-target="#exampleModalCenter">
			Inventário
			</button>
			
			<a href="logout.php"><button class="btn btn-outline-danger mr-2 my-sm-0" >Sair</button></a>
			
		</div>
	</nav>
</div>

<!-- Modal -->
<div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLongTitle">Inventário</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				
				<center>
				
				<img src="assets/perk_bomba.png" onclick="inventário()">
				<br>
				Bomba
				<br>
				<br>
				<img src="assets/perk_pular_pergunta.png">
				<br>
				Pular Pergunta
				<br>
				<br>
				<img src="assets/perk_segunda_chance.png">
				<br>
				Segunda Chance
				<br>
				<br>
				
				</center>
				
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
			</div>
		</div>
	</div>
</div>

</body>
</html>