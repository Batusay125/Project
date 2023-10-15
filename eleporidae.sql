-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: eleporidae
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `adoption`
--

DROP TABLE IF EXISTS `adoption`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adoption` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rabbit_id` int NOT NULL,
  `adoption_date` varchar(100) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` int NOT NULL,
  `province` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `barangay` varchar(100) NOT NULL,
  `postal_code` int NOT NULL,
  `reason_for_adoption` varchar(200) NOT NULL,
  `other_pets` varchar(200) NOT NULL,
  `user_id` int NOT NULL,
  `transaction_status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adoption`
--

LOCK TABLES `adoption` WRITE;
/*!40000 ALTER TABLE `adoption` DISABLE KEYS */;
INSERT INTO `adoption` VALUES (14,10,'2','tyhjg','gg@gmail.com',2156564,'Camarines Sur','szf','d',4,'jhk','ghk',2,'APPROVE'),(15,1,'','Maria Magdalena','maria@gmail.com',2147483647,'Camarines Sur','Naga','Calaug',4409,'Meat','none',2,'PENDING'),(16,2,'2023-10-13','dfhsdfh','dfdsfh@gmail.com',63,'Camarines Sur','asdfa','sdf',4587,'frtgh','gtj',2,'PENDING'),(17,1,'2023-10-14','john','l@gmail.com',456789,'Camarines Sur','Sipocot','South Centro',4408,'Test','all',2,'PENDING'),(18,2,'2023-10-20','werwer','ivan@gmail.com',4567893,'Camarines Sur','s','tew',324234,'asd','qwe',1,'COMPLETE'),(19,3,'2023-10-14','ivan i','wer@gmail.com',987654456,'Camarines Sur','s','tew',324234,'testing purposes only','ertyuiop',1,'PENDING');
/*!40000 ALTER TABLE `adoption` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `breeding_pair`
--

DROP TABLE IF EXISTS `breeding_pair`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `breeding_pair` (
  `id` int NOT NULL AUTO_INCREMENT,
  `buck_id` int NOT NULL,
  `doe_id` int NOT NULL,
  `pairing_date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `breeding_pair`
--

LOCK TABLES `breeding_pair` WRITE;
/*!40000 ALTER TABLE `breeding_pair` DISABLE KEYS */;
INSERT INTO `breeding_pair` VALUES (1,23,52,'2023-10-17'),(2,2,5,'2023-10-04');
/*!40000 ALTER TABLE `breeding_pair` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rabbit`
--

DROP TABLE IF EXISTS `rabbit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rabbit` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` blob NOT NULL,
  `name` varchar(20) NOT NULL,
  `age` int NOT NULL,
  `sex` varchar(10) NOT NULL,
  `weight` int NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rabbit`
--

LOCK TABLES `rabbit` WRITE;
/*!40000 ALTER TABLE `rabbit` DISABLE KEYS */;
INSERT INTO `rabbit` VALUES (1,'','Totoro',2,'female',4,'./rabbit-contact.png'),(2,'','Loki',11,'male',2,'./rabbit-about.png'),(3,'','Gerald',8,'male',2,'./LoginRabbit.jpg'),(5,'','Nomi',6,'female',3,NULL),(6,'','Snow',9,'female',1,NULL),(7,'','Harold',8,'male',2,NULL),(8,'','Jacob',5,'male',1,NULL),(67,'','Mikey',14,'female',4,NULL);
/*!40000 ALTER TABLE `rabbit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Ivan Bengcolado','ivan@gmail.com','1'),(2,'Francis Bawag','bawag@gmail.com','1'),(3,'Cynthia Lorio','cynthia@gmail.com','1234'),(4,'Aeriel','aeriel@gmail.com','1234'),(5,'Josh','josh@gmail.com','josh123'),(6,'Jopay','jopay@gmail.com','jopay123'),(7,'Cris','cris@gmail.com','0000'),(8,'Francis Paglinawan','paglinawan@gmail.com','1111'),(9,'Cynthia','cynthia1@gmail.com','0000'),(10,'Cynthia','cynthia1@gmail.com','0000'),(11,'Ivan','ivan0@gmail.com','0000'),(12,'Me','me@gmail.com','meme'),(13,'Ivaaann','ivan@gmail.com','1234'),(14,'Ivvvan','ivan@gmail.com','12345'),(15,'ivan','ivan@gmail.com','12343'),(16,'Chloe','ivan1@gmail.com','1234'),(17,'Ivan Bengcolado','ivan000@gmail.com','1234');
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

-- Dump completed on 2023-10-14 17:42:31
