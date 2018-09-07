<?php

include_once("includes/Cadastro.php");
include_once("includes/verifica_login.php");

?>


<html>
<head>
	
	<title>Cadastro de usuário</title>
	
	<link rel="stylesheet" type="text/css "href="css/bootstrap/bootstrap.css"/>
    <link rel="stylesheet" type="text/css "href="css/signin.css"/>

    <script type="text/javascript" src="js/bootstrap/bootstrap.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
	<script>
	
	function openHome(){
	
	document.location.href = "index.php";
	
	}
	
	</script>
</head>

<body class="text-center" style="background-color:#000000">
	
	<div style="margin: 0 auto;">
	
		<img class="mb-4" src="imgs/LogoFinal.png" alt="" height="72">
	
		<h1 class="h3 mb-3 font-weight-normal" style="color:#ffffff"> Cadastrar </h1>
	
		<form class="form-signin" method="post" action="cadastro.php">
	
			<input type="email" name="email" class="form-control" placeholder="E-mail"  required autofocus>

			<input type="text" name="name" class="form-control" placeholder="Nome de Usuário"  required>

			<input type="password" name="senha" class="form-control" style="margin-bottom:0px" placeholder="Senha"  required>

			<input type="password" name="senha" class="form-control" placeholder="Confirmar senha"  required>
	
	
			<button type="submit" class="btn btn-lg btn-outline-success btn-block"> Cadastrar </button> 

			
	
		<button onclick="openHome()" type="button" class="btn btn-lg btn-outline-danger btn-block"> Cancelar </button>
	
		</form>
	</div>
</body>
</html>