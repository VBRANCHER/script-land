<?php

session_start();

include_once("includes/login.php");
include_once("includes/verifica_login.php"); 

?>

<html>
<head>

<title>Login do usuário</title>

<link rel="shortcut icon" href="assets/icone.ico" type="image/x-icon"/>

<link rel="stylesheet" type="text/css "href="css/bootstrap/bootstrap.css"/>
<link rel="stylesheet" type="text/css "href="css/signin.css"/>

<script type="text/javascript" src="js/bootstrap/bootstrap.js"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>

<script>
	function openCadastro(){
	
		document.location.href = "cadastro.php";
	
	}
	
	function openPassword(){
	
		document.location.href = "esqueciSenha.php";
	
	}
	
</script>

</head>
<body class="text-center" style="background-color:#000000">


<div style="margin: 0 auto;">

<img class="mb-4" src="assets/LogoFinal.png" alt="" height="72">

<form class="form-signin" method="post" action="index.php">

    <h1 class="h3 mb-3 font-weight-normal" style="color:white">Logar</h1>
	
    <input type="email" id="inputEmail" name="inputEmail" class="form-withoutborder" placeholder="E-mail" required autofocus>
	
    <input type="password" id="inputPassword" name="inputPassword" class="form-withoutborder" placeholder="Senha" required>
	
    <button class="btn btn-lg btn-outline-success btn-block" type="submit">Entrar</button>
	
	<button onclick="openCadastro()" class="btn btn-lg btn-outline-info btn-block" type="button">Cadastrar</button>
	
	<button onclick="openPassword()" class="btn btn-lg btn-outline-danger btn-block" type="button">Esqueci minha senha</button>
	
</form>

</div>

</body>

</html>