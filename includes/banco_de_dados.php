<html>

<head>

</head>

<body>

<?php

function select($pQuery){
	
	$conexao = mysqli_connect("localhost", "root", "root", "bd_scriptland");

	$dados = mysqli_query($conexao, $pQuery) or die("Sua query retornou um erro");
	
	$arraySelect = array();
	if ($dados->num_rows > 0) {
	 
		while($row = $dados->fetch_assoc()) {
			$arraySelect[] = $row;
		}
	}
	else {
		return 0;
	}
	
	mysqli_close($conexao);
	
	return $arraySelect;
}

function php_insert($pQuery){
	
	$conexao = mysqli_connect("localhost", "root", "root", "bd_scriptland");
	
	$dados = mysqli_query($conexao, $pQuery) or die("Erro ao usar seu INSERT");
	
	mysqli_close($conexao);
	
	return $dados;
	
}

function sql_delete_update($pQuery){
	
	$conexao = mysqli_connect("localhost", "root", "root", "bd_scriptland");
	
	$dados = mysqli_query ($conexao, $pQuery) or die ("Erro ao deletar");
	
	$atualizadas = mysqli_affected_rows($conexao);
	
	mysqli_close($conexao);
	
	if ($atualizadas > 0){
		return $atualizadas . " registros deletados/atualizados com sucesso.";
	}else{
		return "Nenhum valor foi deletado/atualizado do banco de dados.";
	}
	
}

?>

</body>

</html>