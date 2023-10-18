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
  `home_environment_image_path` varchar(255) DEFAULT NULL,
  `service_option` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adoption`
--

LOCK TABLES `adoption` WRITE;
/*!40000 ALTER TABLE `adoption` DISABLE KEYS */;
INSERT INTO `adoption` VALUES (14,10,'2','tyhjg','gg@gmail.com',2156564,'Camarines Sur','szf','d',4,'jhk','ghk',2,'APPROVE','home.jpg','Deliver'),(15,1,'','Maria Magdalena','maria@gmail.com',2147483647,'Camarines Sur','Naga','Calaug',4409,'Meat','none',2,'APPROVE','home.jpg','Deliver'),(16,2,'2023-10-13','dfhsdfh','dfdsfh@gmail.com',63,'Camarines Sur','asdfa','sdf',4587,'frtgh','gtj',2,'APPROVE','home.jpg','Deliver'),(17,1,'2023-10-14','john','l@gmail.com',456789,'Camarines Sur','Sipocot','South Centro',4408,'Test','all',2,'PENDING','home.jpg','Deliver'),(18,2,'2023-10-20','werwer','ivan@gmail.com',4567893,'Camarines Sur','s','tew',324234,'asd','qwe',1,'PENDING','home.jpg','Deliver'),(19,3,'2023-10-14','ivan i','wer@gmail.com',987654456,'Camarines Sur','s','tew',324234,'testing purposes only','ertyuiop',1,'PENDING','home.jpg','Deliver'),(20,5,'2023-10-14','abcd','abcd@gmail.com',987654,'Camarines Sur','Sipocot','South Centro',4408,'Testing for abcd','nothing',1,'PENDING','home.jpg','Deliver'),(21,1,'1111-11-11','marisdfsdf','ivan@gmail.com',2147483234,'Camarines Sur','Sipocot','tew',4408,'asdf','adsf',1,'PENDING','home.jpg','Pick up'),(22,1,'4444-04-04','werwer','ivan@gmail.com',2147483234,'Camarines Sur','Sipocot','tew',4408,'sdf','gsfdg',1,'PENDING','home.jpg','Pick up'),(23,1,'5555-05-05','mari','ivan@gmail.com',2147483234,'Camarines Sur','Sipocot','South Centro',4405,'sfdg','asdf',1,'APPROVE','home.jpg','Deliver'),(24,1,'6666-06-06','werwer','mari@gmail.com',2147483234,'Camarines Sur','Sipocot','South Centro',4408,'sdf','gsfdg',1,'PENDING','home.jpg','Pick up'),(25,1,'3333-03-31','werwer','ivan@gmail.com',62,'Camarines Sur','Sipocot','South Centro',4408,'sd','f',1,'PENDING','home.jpg','Pick up'),(26,1,'2222-02-22','werwer','ivan@gmail.com',62,'Camarines Sur','Sipocot','South Centro',324234,'sdf','gsdfg',1,'PENDING','home.jpg','Pick up'),(27,1,'2222-02-22','marisdfsdf','wer@gmail.com',43,'Camarines Sur','s','South Centro',7890,'asdf','adsf',1,'PENDING','home.jpg','Pick up'),(28,1,'7777-07-07','xcvsd','mari@gmail.com',64,'Camarines Sur','s','South Centro',4408,'sdf','sdf',1,'PENDING','home.jpg','Pick up'),(29,1,'0033-03-31','sadf','ivan@gmail.com',23,'Camarines Sur','Sipocot','we',4405,'ghjk','bvcx',1,'PENDING','home.jpg','Pick up'),(30,1,'5555-05-05','mari','bawag@gmail.com',34,'Camarines Sur','Sipocot','we',7890,'h','h',1,'PENDING','home.jpg','Pick up'),(32,3,'0033-03-31','asdf','bawag@gmail.com',32,'Camarines Sur','Sipocot','tew',4408,'sdf','sdf',1,'PENDING','home.jpg','Pick up'),(33,1,'3333-03-31','sdfghjklrtyuiop','ivan@gmail.com',62,'Camarines Sur','Sipocot','tew',4408,'ghjkl','asdf',1,'PENDING','4321.png','Pick up'),(35,2,'0333-03-31','cynthia','c@gmail.com',3456,'Camarines Sur','Sipocot','South Centro',4405,'test','ttt',1,'PENDING','home.jpg','Pick up'),(36,2,'3333-03-31','ivan','ivan@gmail.com',3456789,'Camarines Sur','Sipocot','tew',4408,'sssss','eeee',1,'PENDING','home.jpg','Pick up'),(37,2,'0333-03-31','ivan','ivan@gmail.com',234567890,'Camarines Sur','Sipocot','tew',4405,'qqqq','aaaa',1,'PENDING','home.jpg','Pick up'),(38,2,'3333-03-31','mari','ivan@gmail.com',43,'Camarines Sur','Sipocot','tew',4408,'ooooo','pppp',1,'PENDING','home.jpg','Pick up'),(39,2,'3333-03-31','llll','ivan@gmail.com',64,'Camarines Sur','Sipocot','tew',4405,'mmmnmnmnmn','nnnn',1,'PENDING','home.jpg','Deliver'),(40,2,'0022-02-22','werwer','ivan@gmail.com',22,'Camarines Sur','Sipocot','South Centro',4408,'aaaaaa','vvvv',1,'PENDING','home.jpg','Pick up');
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
  `pairing_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `breeding_pair`
--

LOCK TABLES `breeding_pair` WRITE;
/*!40000 ALTER TABLE `breeding_pair` DISABLE KEYS */;
INSERT INTO `breeding_pair` VALUES (1,23,52,'2023-10-16'),(2,2,5,'2023-10-16'),(3,1,2,'2023-10-16'),(4,1,2,'2023-10-16'),(5,1,2,'2023-10-16'),(6,1,2,'2023-10-16');
/*!40000 ALTER TABLE `breeding_pair` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chat`
--

DROP TABLE IF EXISTS `chat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `message` varchar(255) DEFAULT NULL,
  `user_id` int NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat`
--

LOCK TABLES `chat` WRITE;
/*!40000 ALTER TABLE `chat` DISABLE KEYS */;
INSERT INTO `chat` VALUES (1,'hello world',1,'Admin');
/*!40000 ALTER TABLE `chat` ENABLE KEYS */;
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
  `rehome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rabbit`
--

LOCK TABLES `rabbit` WRITE;
/*!40000 ALTER TABLE `rabbit` DISABLE KEYS */;
INSERT INTO `rabbit` VALUES (1,'','Totoro',2,'female',4,'./rabbit-contact.png','REHOME'),(2,'','Loki',11,'male',2,'rabbit-about.png','REHOME'),(3,'','Gerald',8,'male',2,'LoginRabbit.jpg','REHOME'),(5,'','Nomi',6,'female',3,'rabbit-about.png',NULL),(6,'','Snow',9,'female',1,'1234.png',NULL),(7,'','Harold',8,'male',2,NULL,NULL),(8,'','Jacob',5,'male',1,NULL,NULL),(67,'','Mikey',14,'female',4,NULL,NULL);
/*!40000 ALTER TABLE `rabbit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `upload`
--

DROP TABLE IF EXISTS `upload`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `upload` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `upload`
--

LOCK TABLES `upload` WRITE;
/*!40000 ALTER TABLE `upload` DISABLE KEYS */;
INSERT INTO `upload` VALUES (1,'4321.png'),(3,'Screenshot 2023-07-29 161411.png');
/*!40000 ALTER TABLE `upload` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Ivan Bengcolado','ivan@gmail.com','1'),(2,'Francis Bawag','bawag@gmail.com','1'),(3,'Cynthia Lorio','cynthia@gmail.com','1234'),(4,'Aeriel','aeriel@gmail.com','1234'),(5,'Josh','josh@gmail.com','josh123'),(6,'Jopay','jopay@gmail.com','jopay123'),(7,'Cris','cris@gmail.com','0000'),(8,'Francis Paglinawan','paglinawan@gmail.com','1111'),(9,'Cynthia','cynthia1@gmail.com','0000'),(10,'Cynthia','cynthia1@gmail.com','0000'),(11,'Ivan','ivan0@gmail.com','0000'),(12,'Me','me@gmail.com','meme'),(13,'Ivaaann','ivan@gmail.com','1234'),(14,'Ivvvan','ivan@gmail.com','12345'),(15,'ivan','ivan@gmail.com','12343'),(16,'Chloe','ivan1@gmail.com','1234'),(17,'Ivan Bengcolado','ivan000@gmail.com','1234'),(18,'j','j@gmail.com','1');
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

-- Dump completed on 2023-10-18  8:17:51
