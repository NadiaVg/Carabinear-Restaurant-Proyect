CREATE DATABASE  IF NOT EXISTS `db_carabinear` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_carabinear`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: db_carabinear
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dishes`
--

DROP TABLE IF EXISTS `dishes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dishes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `restaurantId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `restaurantId` (`restaurantId`),
  CONSTRAINT `dishes_ibfk_1` FOREIGN KEY (`restaurantId`) REFERENCES `restaurants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dishes`
--

LOCK TABLES `dishes` WRITE;
/*!40000 ALTER TABLE `dishes` DISABLE KEYS */;
INSERT INTO `dishes` VALUES (1,'Hamburguesa Atlanta','image-1671417005496.jpg','2022-12-17 23:07:56','2022-12-19 02:30:05',2),(2,'Pizza Vegan','image-1671318527519.jpg','2022-12-17 23:08:47','2022-12-17 23:08:47',2),(3,'Aros de Cebolla','image-1671318550723.jpg','2022-12-17 23:09:10','2022-12-17 23:09:10',2),(4,'Tiramisú','image-1671318579411.jpg','2022-12-17 23:09:39','2022-12-17 23:09:39',2);
/*!40000 ALTER TABLE `dishes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `direction` varchar(255) DEFAULT NULL,
  `CP` int DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `likes` int DEFAULT NULL,
  `dislikes` int DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (2,'Cielo','C. Perú, 27,  Las Palmas de Gran Canaria, Las Palmas',35010,'Americana',NULL,NULL,'image-1671217906136.jpg','2022-12-16 19:11:46','2022-12-16 19:11:46'),(5,'American Kitchen','C. Juan Manuel Durán González, 42, Las Palmas de Gran Canaria, Las Palmas',35010,'Americana',NULL,NULL,'image-1671219722042.jpg','2022-12-16 19:42:02','2022-12-16 19:42:02'),(6,'Arte Y Sano','C. Jesús Ferrer Jimeno, 13, Las Palmas de Gran Canaria, Las Palmas',35010,'Italiana',NULL,NULL,'image-1671220677948.jpg','2022-12-16 19:42:49','2022-12-16 19:57:57'),(7,'Changqhi Sushi','C. León y Castillo, 385, Las Palmas de Gran Canaria, Las Palmas',35007,'Japonesa',NULL,NULL,'image-1671220228552.jpg','2022-12-16 19:50:28','2022-12-16 19:50:28'),(8,'El Típico Español','P.º las Canteras, 19, Palmas de Gran Canaria (las), Las Palmas',35008,'Española',NULL,NULL,'image-1671220268465.jpg','2022-12-16 19:51:08','2022-12-16 19:51:08'),(9,'Mister Ribs','Centro Comercial Las Ramblas, Las Palmas de Gran Canaria, Las Palmas',35019,'Americana',NULL,NULL,'image-1671220312592.jpg','2022-12-16 19:51:52','2022-12-16 19:51:52'),(10,'Mundo Ibérico','C. Olof Palme, 41, Las Palmas de Gran Canaria, Las Palmas',35010,'Española',NULL,NULL,'image-1671220378050.jpg','2022-12-16 19:52:58','2022-12-16 19:52:58'),(11,'Parrilla la Mona','C. Fondos de Segura, 11, Las Palmas de Gran Canaria, Las Palmas',35019,'Colombiana',NULL,NULL,'image-1671220419121.jpg','2022-12-16 19:53:39','2022-12-16 19:53:39'),(12,'Piemonte','P.º las Canteras, 48, Las Palmas de Gran Canaria, Las Palmas',35010,'Italiana',NULL,NULL,'image-1671220466409.jpg','2022-12-16 19:54:26','2022-12-16 19:54:26'),(13,'School Busrger','C. Pdte. Alvear, 43, Las Palmas de Gran Canaria, Las Palmas',35007,'Americana',NULL,NULL,'image-1671220505205.jpg','2022-12-16 19:55:05','2022-12-16 19:55:05'),(14,'Tony Roma\'s','Centro Comercial Las Arenas, Las Palmas de Gran Canaria, Las Palmas',35010,'Americana',NULL,NULL,'image-1671220556382.jpg','2022-12-16 19:55:56','2022-12-16 19:55:56'),(15,'Kaletone','Las Ramblas, Av. Juan Carlos I, 29, Local 9-10 C.C, Centro, Las Palmas de Gran',35019,'Italiano',NULL,NULL,'image-1671220614717.jpg','2022-12-16 19:56:54','2022-12-16 19:56:54');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20221125183645-relation-many-to-many.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `admin` int DEFAULT NULL,
  `CP` varchar(255) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jordan','jordan@gmail.com','$2a$10$mdlPnIQj2QSdVpH.hBYI4./mpPXZj1Lq7WiNkI51S423Nzf6eVQsi',0,'35015',NULL,'2022-12-18 01:26:59','2022-12-19 02:26:28'),(2,NULL,'sergio@gmail.com','$2a$10$sDvmnhqvRCVmKezIxXXVfe29OZbY1qKiSRpJnWYL85kgXq1u7dndS',0,NULL,NULL,'2022-12-18 01:29:12','2022-12-18 01:29:12'),(3,NULL,'dawdwa','$2a$10$3uwlXJzmRdOiZXV75nDN/uc8HlA0tWSzidVNrpZM8O7QkSHjj8oLW',0,NULL,NULL,'2022-12-18 01:44:04','2022-12-18 01:44:04'),(4,NULL,'d','$2a$10$p0RDyDVKgox/QrJOibYj7uIs83oeB1cKE.PiKm6bsDOq2cxftWLBa',0,NULL,NULL,'2022-12-18 01:45:18','2022-12-18 01:45:18'),(5,NULL,'df','$2a$10$UjQ2Nq9Ulb4WGpPtQ0YLrOYKh8uBuSCM6cgx/o7zxRGlbhnQpaP4i',0,NULL,NULL,'2022-12-18 02:03:41','2022-12-18 02:03:41'),(6,NULL,'j','$2a$10$ZZ0OkdqxHwKElox9GGUCKOwBxnhN00dCaD1MrtjuLB1RarX9Ceuo.',0,NULL,NULL,'2022-12-18 02:05:49','2022-12-18 02:05:49'),(7,'ll','dkk','$2a$10$ZqbP4LQaWDiiZmXzqTwU5uleT3Zib5b3KQzH1m/9xzvxp0nc1i/YS',0,'3555',NULL,'2022-12-18 02:10:59','2022-12-18 02:10:59'),(8,NULL,'nadia@gmail.com','$2a$10$3jfct4B5WM721qtLmhTor.TRSfyONaI0TRxlOZogXGiFI0Ou1Kbq.',0,NULL,NULL,'2022-12-19 03:02:36','2022-12-19 03:02:36');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-19  3:29:23
