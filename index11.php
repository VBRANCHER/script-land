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
	
	scene: [selecionaPersonagem, tutorial, loja, spawn, teste, loja_dentro, game_over, salvar, lugar_legal]
};
var game = new Phaser.Game(config);
game.scene.start(selecionaPersonagem);

</script>


</body>
</html>