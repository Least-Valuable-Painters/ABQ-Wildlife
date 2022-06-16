-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: wildlife-capstone
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `commentId` binary(16) NOT NULL,
  `commentImageId` binary(16) NOT NULL,
  `commentUserId` binary(16) NOT NULL,
  `commentContent` varchar(255) DEFAULT NULL,
  `commentDate` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`commentId`),
  KEY `commentImageId` (`commentImageId`),
  KEY `commentUserId` (`commentUserId`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`commentImageId`) REFERENCES `image` (`imageId`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`commentUserId`) REFERENCES `user` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite`
--

DROP TABLE IF EXISTS `favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite` (
  `favoriteLocationId` binary(16) NOT NULL,
  `favoriteUserId` binary(16) NOT NULL,
  PRIMARY KEY (`favoriteLocationId`,`favoriteUserId`),
  KEY `favoriteLocationId` (`favoriteLocationId`),
  KEY `favoriteUserId` (`favoriteUserId`),
  CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`favoriteLocationId`) REFERENCES `location` (`locationId`),
  CONSTRAINT `favorite_ibfk_2` FOREIGN KEY (`favoriteUserId`) REFERENCES `user` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite`
--

LOCK TABLES `favorite` WRITE;
/*!40000 ALTER TABLE `favorite` DISABLE KEYS */;
INSERT INTO `favorite` VALUES (_binary '&\μω\λi\μª4B¬\0',_binary '‚H\α/\μ…\πB¬\Z\0'),(_binary '^ΐM’\λi\μª4B¬\0',_binary '‚H\α/\μ…\πB¬\Z\0');
/*!40000 ALTER TABLE `favorite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `imageId` binary(16) NOT NULL,
  `imageLocationId` binary(16) NOT NULL,
  `imageUserId` binary(16) NOT NULL,
  `imageCloudinaryId` varchar(255) NOT NULL,
  `imageDateCreated` datetime(6) NOT NULL,
  `imageUrl` char(255) NOT NULL,
  PRIMARY KEY (`imageId`),
  KEY `imageLocationId` (`imageLocationId`),
  KEY `imageUserId` (`imageUserId`),
  CONSTRAINT `image_ibfk_1` FOREIGN KEY (`imageLocationId`) REFERENCES `location` (`locationId`),
  CONSTRAINT `image_ibfk_2` FOREIGN KEY (`imageUserId`) REFERENCES `user` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (_binary 'V‰)‘\λ\ο\μ§lBΐ¨ ',_binary '&\μω\λi\μª4B¬\0',_binary '‚H\α/\μ…\πB¬\Z\0','','2022-06-14 14:36:12.000000','https://res.cloudinary.com/dmutzrrpu/image/upload/v1655217371/fm7vqdw9hwskdzreefnj.jpg'),(_binary '_9A\λ\ο\μ§lBΐ¨ ',_binary '&\μω\λi\μª4B¬\0',_binary '‚H\α/\μ…\πB¬\Z\0','','2022-06-14 14:36:26.000000','https://res.cloudinary.com/dmutzrrpu/image/upload/v1655217386/rnwtwpg0yvrbzpexwi7z.jpg'),(_binary 'q\'\Ϋÿ\λ\ο\μ§lBΐ¨ ',_binary 'ώAd\έ\λ3\μƒ}B¬\0',_binary '‚H\α/\μ…\πB¬\Z\0','','2022-06-14 14:36:56.000000','https://res.cloudinary.com/dmutzrrpu/image/upload/v1655217416/mp4herznuwsfyol8g6aw.jpg'),(_binary 'y\Ρ\"\λ\ο\μ§lBΐ¨ ',_binary 'ώAd\έ\λ3\μƒ}B¬\0',_binary '‚H\α/\μ…\πB¬\Z\0','','2022-06-14 14:37:10.000000','https://res.cloudinary.com/dmutzrrpu/image/upload/v1655217429/iegjdirnmhlilkvkmnpl.jpg'),(_binary '€+1\Λ\λ\ο\μ§lBΐ¨ ',_binary 'ώAd\έ\λ3\μƒ}B¬\0',_binary '‚H\α/\μ…\πB¬\Z\0','','2022-06-14 14:37:22.000000','https://res.cloudinary.com/dmutzrrpu/image/upload/v1655217441/ikawqa6hwnw92ialxpgk.jpg'),(_binary '‰!i\λ\ο\μ§lBΐ¨ ',_binary 'BqN\λi\μª4B¬\0',_binary '‚H\α/\μ…\πB¬\Z\0','','2022-06-14 14:37:37.000000','https://res.cloudinary.com/dmutzrrpu/image/upload/v1655217456/cij2wrhwionw6nis36tg.jpg'),(_binary 'ύ\0\Τ\λ\ο\μ§lBΐ¨ ',_binary 'BqN\λi\μª4B¬\0',_binary '‚H\α/\μ…\πB¬\Z\0','','2022-06-14 14:37:48.000000','https://res.cloudinary.com/dmutzrrpu/image/upload/v1655217468/a451tha1rwwogpy9savl.jpg'),(_binary '–h«½\λ\ο\μ§lBΐ¨ ',_binary 'BqN\λi\μª4B¬\0',_binary '‚H\α/\μ…\πB¬\Z\0','','2022-06-14 14:37:59.000000','https://res.cloudinary.com/dmutzrrpu/image/upload/v1655217478/qmpjoiacyzrhi9f1iteh.jpg'),(_binary '™:›\λω\μª[Bΐ¨0',_binary '&\μω\λi\μª4B¬\0',_binary '‚H\α/\μ…\πB¬\Z\0','','2022-06-14 15:49:38.000000','https://res.cloudinary.com/dmutzrrpu/image/upload/v1655221778/l32hlw2pubpiased1i4l.jpg'),(_binary '¦a\Λ\λ\ο\μ§lBΐ¨ ',_binary '^ΐM’\λi\μª4B¬\0',_binary '‚H\α/\μ…\πB¬\Z\0','','2022-06-14 14:38:26.000000','https://res.cloudinary.com/dmutzrrpu/image/upload/v1655217505/nif4kwl8zidgbwsh4gma.jpg'),(_binary '¬•\λ\ο\μ§lBΐ¨ ',_binary '^ΐM’\λi\μª4B¬\0',_binary '‚H\α/\μ…\πB¬\Z\0','','2022-06-14 14:38:36.000000','https://res.cloudinary.com/dmutzrrpu/image/upload/v1655217516/oq4cru8c1irn6lwng8g9.jpg'),(_binary '²%7…\λ\ο\μ§lBΐ¨ ',_binary '^ΐM’\λi\μª4B¬\0',_binary '‚H\α/\μ…\πB¬\Z\0','','2022-06-14 14:38:46.000000','https://res.cloudinary.com/dmutzrrpu/image/upload/v1655217525/vbjxfxhg0zrnbqevsyrv.jpg');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `locationId` binary(16) NOT NULL,
  `locationDateCreated` date NOT NULL,
  `locationDescription` varchar(128) NOT NULL,
  `locationLat` tinyint NOT NULL,
  `locationLng` tinyint NOT NULL,
  `locationName` varchar(255) NOT NULL,
  PRIMARY KEY (`locationId`),
  UNIQUE KEY `locationId` (`locationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (_binary '&\μω\λi\μª4B¬\0','2022-06-13','forest',35,-108,'Aldo Leopold Forest'),(_binary 'BqN\λi\μª4B¬\0','2022-06-13','forest',35,-106,'Cedro Creek'),(_binary '^ΐM’\λi\μª4B¬\0','2022-06-13','meadows',37,-105,'Midnight Meadows'),(_binary 'ώAd\έ\λ3\μƒ}B¬\0','2022-06-13','wetlands',33,-108,'Cebolla Canyon');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userId` binary(16) NOT NULL,
  `userActivationToken` char(32) DEFAULT NULL,
  `userEmail` varchar(128) NOT NULL,
  `userHash` char(97) NOT NULL,
  `userIsAdmin` tinyint(1) NOT NULL,
  `userName` varchar(128) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userEmail` (`userEmail`),
  UNIQUE KEY `userEmail_2` (`userEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (_binary '°fΏ\β―\μ…\πB¬\Z\0','de99034f69c98ebb9f58b13f546b971b','tquintfjen33@cnm.edu','$argon2id$v=19$m=65536,t=3,p=1$PWIIiogcyD63KiOiRM3xVw$P7dVkURQQpweczdt9ojMp3XsvXLOrDhHIRa68ISuP4w',0,'tquintana89'),(_binary 'ƒ4\Ιϋ\β¬\μ…\πB¬\Z\0','a600d32565d593a00e85f2916483da65','tquintana23@cnm.edu','$argon2id$v=19$m=65536,t=3,p=1$+ejifz/91qrILIg/H5a/Gg$hhaQyKGJMJRkv6eyiJBGEK1TM9tcSI6TKTloFbGDpjI',0,'tquintana99'),(_binary '‚H\α/\μ…\πB¬\Z\0','ef409ea7d965809968892e995ce46cd1','tylerquintana537@gmail.com','$argon2id$v=19$m=65536,t=3,p=1$RqYVJkD8qmhEMtGD6MkEIw$8BuocJ4QsDOYty9eqMoBPho6sKxW7hx8uBC9IpKxwpo',0,'tquintana23'),(_binary '\Μj\Ψ\φ\β\0\μ…\πB¬\Z\0',NULL,'tylerquintana537+1@gmail.com','$argon2id$v=19$m=65536,t=3,p=1$64vZ/4v8pXoVNqpfCsk/pw$f4CB2e743utYtcwjO/xoRxtpQYPPTU2ELYwyQUCz1eg',0,'tquintana23+1');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-16 15:21:43
