-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 14 oct. 2021 à 01:07
-- Version du serveur : 10.4.19-MariaDB
-- Version de PHP : 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `messagerie_cours`
--

-- --------------------------------------------------------

--
-- Structure de la table `commentresponses`
--

CREATE TABLE `commentresponses` (
  `idResponse` int(10) UNSIGNED NOT NULL,
  `idOwner` int(10) UNSIGNED NOT NULL,
  `idPublication` int(10) UNSIGNED NOT NULL,
  `idComment` int(10) UNSIGNED NOT NULL,
  `dateComment` timestamp NOT NULL DEFAULT current_timestamp(),
  `response` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `idComment` int(10) UNSIGNED NOT NULL,
  `idOwner` int(10) UNSIGNED NOT NULL,
  `idPublication` int(10) UNSIGNED NOT NULL,
  `comment` text NOT NULL,
  `dateComment` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `idMessage` int(10) UNSIGNED NOT NULL,
  `idDst` int(10) UNSIGNED NOT NULL,
  `idExp` int(10) UNSIGNED NOT NULL,
  `message` text NOT NULL,
  `sendDate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `publications`
--

CREATE TABLE `publications` (
  `idPublication` int(10) UNSIGNED NOT NULL,
  `idOwner` int(10) UNSIGNED NOT NULL,
  `datePublication` timestamp NOT NULL DEFAULT current_timestamp(),
  `publication` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `idUser` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `birthday` date NOT NULL,
  `creationDate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `commentresponses`
--
ALTER TABLE `commentresponses`
  ADD PRIMARY KEY (`idResponse`),
  ADD KEY `idComment` (`idComment`),
  ADD KEY `idOwner` (`idOwner`),
  ADD KEY `idPublication` (`idPublication`);

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`idComment`),
  ADD KEY `idOwner` (`idOwner`),
  ADD KEY `idPublication` (`idPublication`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`idMessage`),
  ADD KEY `idDst` (`idDst`),
  ADD KEY `idExp` (`idExp`);

--
-- Index pour la table `publications`
--
ALTER TABLE `publications`
  ADD PRIMARY KEY (`idPublication`),
  ADD KEY `idOwner` (`idOwner`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `commentresponses`
--
ALTER TABLE `commentresponses`
  MODIFY `idResponse` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `idComment` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `idMessage` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `publications`
--
ALTER TABLE `publications`
  MODIFY `idPublication` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commentresponses`
--
ALTER TABLE `commentresponses`
  ADD CONSTRAINT `commentresponses_ibfk_1` FOREIGN KEY (`idComment`) REFERENCES `comments` (`idComment`),
  ADD CONSTRAINT `commentresponses_ibfk_2` FOREIGN KEY (`idOwner`) REFERENCES `users` (`idUser`),
  ADD CONSTRAINT `commentresponses_ibfk_3` FOREIGN KEY (`idPublication`) REFERENCES `publications` (`idPublication`);

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`idOwner`) REFERENCES `users` (`idUser`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`idPublication`) REFERENCES `publications` (`idPublication`);

--
-- Contraintes pour la table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`idDst`) REFERENCES `users` (`idUser`),
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`idExp`) REFERENCES `users` (`idUser`);

--
-- Contraintes pour la table `publications`
--
ALTER TABLE `publications`
  ADD CONSTRAINT `publications_ibfk_1` FOREIGN KEY (`idOwner`) REFERENCES `users` (`idUser`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
