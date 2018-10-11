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
	
		<img class="mb-4" src="assets/LogoFinal.png" alt="" height="72">
	
		<h1 class="h3 mb-3 font-weight-normal" style="color:#ffffff"> Cadastrar </h1>
	
		<form class="form-signin" method="post" action="cadastro.php">
	
			<input type="email" name="email" class="form-withoutborder" placeholder="E-mail"  required autofocus>

			<input type="text" name="name" class="form-withoutborder" placeholder="Nome Verdadeiro"  required>
			
			<input type="text" name="nomeusu" class="form-withoutborder" placeholder="Nome de Usuário"  required>

			<input type="password" name="senha" class="form-withoutborder" style="margin-bottom:0px" placeholder="Senha"  required>

			<input type="password" name="senha" class="form-withoutborder" placeholder="Confirmar senha"  required>
	
			<button type="submit" class="btn btn-lg btn-outline-success btn-block" data-toggle="modal" data-target="#exampleModalCenter"> Cadastrar </button> 
	
			<button onclick="openHome()" type="button" class="btn btn-lg btn-outline-danger btn-block"> Voltar </button>
	
		</form>
	
	</div>
	
	<div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLongTitle">Cadastrado com sucesso!</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				
				<center>
				
					Teste
				
				</center>
				
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" href="index.php" data-dismiss="modal">Logar</button>
				<button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
			</div>
		</div>
	</div>
</div>
</body>
</html>