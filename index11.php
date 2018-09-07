<!doctype html> 
<html lang="en"> 
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
	<script src="js/login.js"></script>
    <script src="js/teste.js"></script>
    <script src="js/spawn.js"></script>
	<script src="js/tutorial.js"></script>
	<script src="js/salvar.js"></script>
	<script src="js/esqueci_senha.js"></script>
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
.button {
    background-color: #FFFFF0;
    border: 5px solid black;
    color: black;
    padding: 15px 25px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
	width: 280px;
	height: 73px;
}

.button:hover {
    background-color: silver;
}

.button2 {
    background-color: #FFFFF0;
    border: 5px solid black;
    color: black;
    padding: 15px 25px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
	width: 277px;
	height: 67px;
}

.button2:hover {
    background-color: silver;
}

.button3 {
    background-color: #FFFFF0;
    border: 5px solid black;
    color: black;
    padding: 15px 25px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
	width: 278px;
	height: 82px;
}

.button3:hover {
    background-color: silver;
}

.button4 {
    background-color: #FFFFF0;
    border: 5px solid black;
    color: black;
    padding: 15px 25px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
	width: 278px;
	height: 79px;
}

.button4:hover {
    background-color: silver;
}

#divPergunta {
    margin-top: 471px;
	margin-left:527px;
    position: absolute;
	visibility: hidden;
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
<body style="background-color: #000000">

<div style="position: absolute">

<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
<ul class="navbar-nav mr-auto">
  <div class="collapse navbar-collapse" id="navbarNav">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Opção desativada</a>
          <a class="dropdown-item" href="#">Opção desativada</a>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item" onClick="telaLogin()">Sair</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

</div>



<script type="text/javascript">

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
	
	scene: [selecionaPersonagem,tutorial, login, loja, teste, spawn, loja_dentro, game_over, salvar, esqueci_senha, lugar_legal]
};
var game = new Phaser.Game(config);
game.scene.start(selecionaPersonagem);

function clickGameOver(){

	game.scene.switch('Teste','game_over');
	
	document.getElementById("divPergunta").style.visibility = "hidden";
	

}

function clickCorreto(){

	game.scene.switch('Teste','loja');
	
	document.getElementById("divPergunta").style.visibility = "hidden";
	
}
</script>


<div id="divPergunta">
<center><h2>Em java "FOR" Pode ser utilizado como:</h2></center>
<br>

<button class="button" onclick="clickGameOver()">Não existe em java</button>
<button class="button2" onclick="clickGameOver()">Serve para fazer uma decisão dependendo do valor recebido</button>
<br>
<button class="button3" onclick="clickCorreto()">Serve para uma repetição</button>
<button class="button4" onclick="clickGameOver()">Enfeitar o código</button>



</div>
</body>
</html>