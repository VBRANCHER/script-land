<!doctype html> 
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
    <script src="js/vilao1/teste.js"></script>
    <script src="js/vilao1/teste2.js"></script>
    <script src="js/vilao1/teste3.js"></script>
    <script src="js/vilao2/teste4.js"></script>
    <script src="js/vilao2/teste5.js"></script>
    <script src="js/vilao2/teste6.js"></script>
    <script src="js/vilao2/teste7.js"></script>
    <script src="js/spawn.js"></script>
	<script src="js/tutorial.js"></script>
	<script src="js/salvar.js"></script>
	<script src="js/loja_dentro.js"></script>
	<script src="js/game_over.js"></script>
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

	<script>
	
	function telaLogin(){
		
		<?php
		session_start();
		session_destroy();
		?>
		
		document.location.href = "index.php";
		
	}
	
	</script>

</head>
<body style="background-color: #000000" onload="carregarMoeda()">

<script type="text/javascript">

var jean = 0;
var juju = 0;
var personagem = 0;
var totalMoedas = 0;
var testeObj = new teste();
var testeObj2 = new teste2();
var testeObj3 = new teste3();
var testeObj4 = new teste4();
var testeObj5 = new teste5();
var testeObj6 = new teste6();
var testeObj7 = new teste7();
var lojaObj = new loja();
var spawnObj = new spawn();
var lugar_legalObj = new lugar_legal();
var vidasRestantes = 3;

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
	
	scene: [selecionaPersonagem, tutorial, lojaObj, spawnObj, testeObj, testeObj2, testeObj3,
	testeObj4, testeObj5, testeObj6, testeObj7, vitoria, vitoria2, loja_dentro, game_over,
	salvar, lugar_legalObj]
};
var game = new Phaser.Game(config);
game.scene.start(selecionaPersonagem);

function carregarMoeda(){
	document.getElementById("moedas").innerHTML = "Moedas: " + totalMoedas;
}

</script>

<div style="position: absolute">

<nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light" style="background-color: #FEFEFE !important">
 <a class="navbar-brand" href="#">
          <img src="imgs/icone.png" height="50px" alt="">
        </a>

  <div class="collapse navbar-collapse" id="navbarNav" >
<ul class="navbar-nav mr-auto">
       
			<li class="nav-item">
			    <a class="nav-link" id ="moedas"><script>Moedas: 0</script></a>
				</li>
				<li class="nav-item">
			<!--<a class="nav-link" href="#">Opção desativada</a> -->
         </li>


    </ul>
	<button class="btn btn-outline-danger my-2 my-sm-0"  onClick="telaLogin()">Sair</a>
  </div>
</nav>

</div>






</body>
</html>