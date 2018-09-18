<html>


<head>

	<title>Cadastro</title>

</head>

<body>
<pre>
<?php
	
	include_once("includes/banco_de_dados.php");
	
	$arrayUsuarios = select("SELECT * FROM usuarios");
	

	if(isset($_POST["nome"])){
	
		$confUsu = false;
		foreach($arrayUsuarios as $value=>$key){
		
			if($key['nome'] == $_POST["nome"]){
					$confUsu = true;
					break;
			}
		}
		if($confUsu == false){
			$incluiu = php_insert("INSERT INTO usuarios VALUES (DEFAULT, '{$_POST['nome']}', '{$_POST['email']}')");
		
				if($incluiu == 1)
					echo "Inserido com sucesso!</br>";
				else
					echo $incluiu."</br>";
			
		}else{
			
			echo "Nomes repetidos</br>";
		
		}
	}
	
?>
</pre>
	<form action="cadastro.php" method="post" name="formUsuario" >
	
		<input type="text" placeholder="Nome" name="nome" required /></br></br>
		<input type="email" placeholder="E-mail" name="email" required /></br></br>
		
		
		<input type="submit"/>
		
	</form>

</body>


</html>