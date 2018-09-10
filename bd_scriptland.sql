-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Tempo de geração: 10/09/2018 às 23:59
-- Versão do servidor: 5.7.11-log
-- Versão do PHP: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_scriptland`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `itens`
--

CREATE TABLE `itens` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identificar o item.',
  `nome` varchar(45) NOT NULL COMMENT 'O nome dado ao respectivo item.',
  `descricao` varchar(100) NOT NULL COMMENT 'Descrição do item.',
  `qtd_max` tinyint(2) UNSIGNED NOT NULL COMMENT 'Quantidade máxima de itens que o jogador pode comprar deste item.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela destinada a armazenar os itens que o jogo oferece ao jogador.';

-- --------------------------------------------------------

--
-- Estrutura para tabela `jogadores`
--

CREATE TABLE `jogadores` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identificar o jogador.',
  `nome` varchar(12) NOT NULL COMMENT 'Nome verdadeiro do jogador.\nSomente o primeiro nome.',
  `nome_usuario` varchar(25) NOT NULL COMMENT 'Nome que aparecerá nos menus do jogo e será utilizado para fazer Login.',
  `email` varchar(70) NOT NULL COMMENT 'E-mail para recuperação da conta e impedir que o mesmo jogador crie várias contas com o mesmo e-mail.',
  `senha` char(32) NOT NULL COMMENT 'Senha usada para poder se logar com o nome_usuario. Criptografada.',
  `data_registro` date NOT NULL COMMENT 'Armazena a data que o usuário se cadastrou.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela destinada a armazenar as informações dos jogadores.';

--
-- Fazendo dump de dados para tabela `jogadores`
--

INSERT INTO `jogadores` (`id`, `nome`, `nome_usuario`, `email`, `senha`, `data_registro`) VALUES
(0000000001, 'Paulo', 'Elfo arqueiro', 'elfo@hotmail.com', '123', '2017-09-17'),
(0000000002, 'Eduardo', 'E-Arky', 'eduardo@gmail.com', '123', '2018-04-01'),
(0000000003, 'Vinícius', 'VBRANCHER', 'vinicius@hotmail.com', '123', '2018-06-20');

-- --------------------------------------------------------

--
-- Estrutura para tabela `logins`
--

CREATE TABLE `logins` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identificação do Login.',
  `data` date NOT NULL COMMENT 'Salva a data que o jogador se logou.',
  `hora` time NOT NULL COMMENT 'Salva a hora que o jogador se logou.',
  `jogadores_id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identifica os jogadores.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela destinada a controlar os logins dos jogadores.';

-- --------------------------------------------------------

--
-- Estrutura para tabela `perfis`
--

CREATE TABLE `perfis` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identificador de perfil.',
  `personagem` tinyint(1) NOT NULL COMMENT 'Personagem selecionado:\n1 = Personagem 1\n2 = Personagem 2\n3 = Personagem 3\n4 = Personagem 4',
  `moedas` smallint(5) UNSIGNED NOT NULL COMMENT 'Moedas que o jogador possui no total.',
  `ponto_salvo` tinyint(2) UNSIGNED NOT NULL COMMENT 'Em qual ponto salvo o jogador interagiu por último:\n1 = Ponto salvo 1\n2 = Ponto salvo 2\n3 = Ponto salvo 3\nE assim por diante.',
  `tempo_jogado` time NOT NULL COMMENT 'Tempo total que o jogador passou jogando logado.',
  `vida` tinyint(1) UNSIGNED NOT NULL COMMENT 'Quantas vidas o jogador possui no momento.',
  `pontos` int(10) UNSIGNED NOT NULL COMMENT 'Pontuação total que o jogador conseguiu ao longo do jogo, o tempo restante de uma pergunta será convertido em pontos.',
  `jogadores_id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identifica os jogadores.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela destinada a armazenar o progresso do perfil do usuário.';

-- --------------------------------------------------------

--
-- Estrutura para tabela `perfis_has_itens`
--

CREATE TABLE `perfis_has_itens` (
  `perfis_id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identifica os perfis.',
  `itens_id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identifica os itens do jogo.',
  `quantidade` tinyint(2) UNSIGNED NOT NULL COMMENT 'Quantidade máxima que o jogador pode levar de uma vez com ele.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela destinada arrmazenar os itens carregados pelo jogardor.';

-- --------------------------------------------------------

--
-- Estrutura para tabela `perguntas`
--

CREATE TABLE `perguntas` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identifica a pergunta.',
  `enunciado` varchar(75) NOT NULL COMMENT 'Enunciado na qual o vilão irá atacar com sua pergunta.\n',
  `tempo` time NOT NULL COMMENT 'Tempo que o jogador terá que responder a pergunta.\n',
  `alt_1` varchar(50) NOT NULL COMMENT 'Alternativa 1 do enunciado.',
  `alt_2` varchar(50) NOT NULL COMMENT 'Alternativa 2 do enunciado.\n',
  `alt_3` varchar(50) NOT NULL COMMENT 'Alternativa 3 do enunciado.',
  `alt_correta` varchar(50) NOT NULL COMMENT 'Alternativa correta do enunciado.\n',
  `viloes_nome` varchar(12) NOT NULL COMMENT 'Identifica o nome dos vilões.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela destinada a armazenar as perguntas e suas alternativas.';

-- --------------------------------------------------------

--
-- Estrutura para tabela `perguntas_has_perfis`
--

CREATE TABLE `perguntas_has_perfis` (
  `perguntas_id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identifica as perguntas que o jogador respondeu.',
  `perfis_id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identifica os perfil do jogador que respondeu a pergunta.',
  `resposta` tinyint(1) UNSIGNED NOT NULL COMMENT 'Armazena a resposta na qual o usuário obteve para responder.\n',
  `tempo_jogado` time NOT NULL COMMENT 'Armazena o tempo total na qual o usuário obteve para responder.\n'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela destinada a armazenar as respostas que o jogador dá e o tempo jogado. ';

-- --------------------------------------------------------

--
-- Estrutura para tabela `viloes`
--

CREATE TABLE `viloes` (
  `nome` varchar(12) NOT NULL COMMENT 'Nome do vilão.',
  `materias` varchar(17) NOT NULL COMMENT 'Matéria (--) do vilão.',
  `img` varchar(255) NOT NULL COMMENT 'URL da imagem que contém a pergunta.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela destinada a armazenar os vilões e suas respectivas matérias. ';

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `itens`
--
ALTER TABLE `itens`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `jogadores`
--
ALTER TABLE `jogadores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- Índices de tabela `logins`
--
ALTER TABLE `logins`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_logins_jogadores1_idx` (`jogadores_id`);

--
-- Índices de tabela `perfis`
--
ALTER TABLE `perfis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_perfis_jogadores1_idx` (`jogadores_id`);

--
-- Índices de tabela `perfis_has_itens`
--
ALTER TABLE `perfis_has_itens`
  ADD PRIMARY KEY (`perfis_id`,`itens_id`),
  ADD KEY `fk_perfis_has_itens_itens1_idx` (`itens_id`),
  ADD KEY `fk_perfis_has_itens_perfis1_idx` (`perfis_id`);

--
-- Índices de tabela `perguntas`
--
ALTER TABLE `perguntas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_perguntas_viloes1_idx` (`viloes_nome`);

--
-- Índices de tabela `perguntas_has_perfis`
--
ALTER TABLE `perguntas_has_perfis`
  ADD PRIMARY KEY (`perguntas_id`,`perfis_id`),
  ADD KEY `fk_perguntas_has_perfis_perfis1_idx` (`perfis_id`),
  ADD KEY `fk_perguntas_has_perfis_perguntas1_idx` (`perguntas_id`);

--
-- Índices de tabela `viloes`
--
ALTER TABLE `viloes`
  ADD PRIMARY KEY (`nome`),
  ADD UNIQUE KEY `nome_UNIQUE` (`nome`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `itens`
--
ALTER TABLE `itens`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT COMMENT 'Identificar o item.';
--
-- AUTO_INCREMENT de tabela `jogadores`
--
ALTER TABLE `jogadores`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT COMMENT 'Identificar o jogador.', AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de tabela `logins`
--
ALTER TABLE `logins`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT COMMENT 'Identificação do Login.';
--
-- AUTO_INCREMENT de tabela `perfis`
--
ALTER TABLE `perfis`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT COMMENT 'Identificador de perfil.';
--
-- AUTO_INCREMENT de tabela `perguntas`
--
ALTER TABLE `perguntas`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT COMMENT 'Identifica a pergunta.';
--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `logins`
--
ALTER TABLE `logins`
  ADD CONSTRAINT `fk_logins_jogadores1` FOREIGN KEY (`jogadores_id`) REFERENCES `jogadores` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `perfis`
--
ALTER TABLE `perfis`
  ADD CONSTRAINT `fk_perfis_jogadores1` FOREIGN KEY (`jogadores_id`) REFERENCES `jogadores` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `perfis_has_itens`
--
ALTER TABLE `perfis_has_itens`
  ADD CONSTRAINT `fk_perfis_has_itens_itens1` FOREIGN KEY (`itens_id`) REFERENCES `itens` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_perfis_has_itens_perfis1` FOREIGN KEY (`perfis_id`) REFERENCES `perfis` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `perguntas`
--
ALTER TABLE `perguntas`
  ADD CONSTRAINT `fk_perguntas_viloes1` FOREIGN KEY (`viloes_nome`) REFERENCES `viloes` (`nome`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `perguntas_has_perfis`
--
ALTER TABLE `perguntas_has_perfis`
  ADD CONSTRAINT `fk_perguntas_has_perfis_perfis1` FOREIGN KEY (`perfis_id`) REFERENCES `perfis` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_perguntas_has_perfis_perguntas1` FOREIGN KEY (`perguntas_id`) REFERENCES `perguntas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
