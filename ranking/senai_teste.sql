-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Tempo de geração: 17/08/2018 às 03:20
-- Versão do servidor: 5.7.11-log
-- Versão do PHP: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `senai_teste`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `idusuario` int(64) NOT NULL,
  `nome` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Fazendo dump de dados para tabela `usuarios`
--

INSERT INTO `usuarios` (`idusuario`, `nome`, `email`) VALUES
(2, 'juliana', 'Juliana@gmail.com'),
(4, 'juliana', 'Juliana@gmail.com'),
(5, 'juliana', 'Juliana@gmail.com'),
(6, 'juliana', 'Juliana@gmail.com'),
(7, 'juliana', 'Juliana@gmail.com'),
(8, 'joao', 'Joao@gmail.com'),
(9, 'joao', 'Joao@gmail.com'),
(10, 'Fernando', 'Fernando@gmail.com'),
(11, 'ViniBoy', 'ViniBoy@eduardo.com'),
(12, 'EduBoy', 'Eduboy@Vinicius.com'),
(13, 'Pedro', 'Pedro@pedra.com'),
(14, 'Rafael', 'Jinbun@wo.com');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario_personagem`
--

CREATE TABLE `usuario_personagem` (
  `idPersonagem` int(64) NOT NULL,
  `idUsuario` int(64) NOT NULL,
  `nome` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `habilidade` varchar(64) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Fazendo dump de dados para tabela `usuario_personagem`
--

INSERT INTO `usuario_personagem` (`idPersonagem`, `idUsuario`, `nome`, `habilidade`) VALUES
(1, 2, 'minnie', 'chorar');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuario`);

--
-- Índices de tabela `usuario_personagem`
--
ALTER TABLE `usuario_personagem`
  ADD PRIMARY KEY (`idPersonagem`),
  ADD KEY `usuario_id_usuario` (`idUsuario`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuario` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT de tabela `usuario_personagem`
--
ALTER TABLE `usuario_personagem`
  MODIFY `idPersonagem` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `usuario_personagem`
--
ALTER TABLE `usuario_personagem`
  ADD CONSTRAINT `usuario_id_usuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
