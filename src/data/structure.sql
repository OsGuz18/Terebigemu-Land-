-- MariaDB dump 10.19  Distrib 10.4.21-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: terebigemuland_db
-- ------------------------------------------------------
-- Server version	10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brand` (
  `Brand_ID` int(200) NOT NULL,
  `CompanyName` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `CompanyContact` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `ContactAddress` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `ContactPhone` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `HomePage` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Brand_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `deliveryservice`
--

DROP TABLE IF EXISTS `deliveryservice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `deliveryservice` (
  `DeliveryService_ID` int(200) NOT NULL AUTO_INCREMENT,
  `DeliveryType_ID` int(200) NOT NULL,
  `DeliveryCompany` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Telephone` int(11) NOT NULL,
  `Email` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `HomePage` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`DeliveryService_ID`),
  KEY `FK_DeliveryService_DeliveryType_idx` (`DeliveryType_ID`),
  CONSTRAINT `FK_DeliveryService_DeliveryType` FOREIGN KEY (`DeliveryType_ID`) REFERENCES `deliverytype` (`DeliveryType_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `deliverytype`
--

DROP TABLE IF EXISTS `deliverytype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `deliverytype` (
  `DeliveryType_ID` int(200) NOT NULL AUTO_INCREMENT,
  `Type` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Description` text COLLATE utf8_unicode_ci NOT NULL,
  `Days` int(11) NOT NULL,
  `Cost` decimal(16,2) NOT NULL,
  PRIMARY KEY (`DeliveryType_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `orderproduct`
--

DROP TABLE IF EXISTS `orderproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orderproduct` (
  `OrderProduct_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Order_ID` int(11) NOT NULL,
  `Product_ID` int(11) NOT NULL,
  PRIMARY KEY (`OrderProduct_ID`),
  KEY `FK_OrderProduct_Order_idx` (`Order_ID`),
  KEY `FK_OrderProduct_Product_idx` (`Product_ID`),
  CONSTRAINT `FK_OrderProduct_Order` FOREIGN KEY (`Order_ID`) REFERENCES `orders` (`Order_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_OrderProduct_Product` FOREIGN KEY (`Product_ID`) REFERENCES `product` (`Product_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `Order_ID` int(200) NOT NULL AUTO_INCREMENT,
  `User_ID` int(200) NOT NULL,
  `DeliveryService_ID` int(200) NOT NULL,
  `OrderStatus` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Price` decimal(6,2) NOT NULL,
  `Disccount` decimal(3,0) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `Taxes` decimal(6,2) NOT NULL,
  `Total` decimal(6,2) NOT NULL,
  PRIMARY KEY (`Order_ID`),
  KEY `FK_Order_User_idx` (`User_ID`),
  KEY `FK_Order_DeliveryService_idx` (`DeliveryService_ID`),
  CONSTRAINT `FK_Order_DeliveryService` FOREIGN KEY (`DeliveryService_ID`) REFERENCES `deliveryservice` (`DeliveryService_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_Order_User` FOREIGN KEY (`User_ID`) REFERENCES `user` (`User_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `Product_ID` int(200) NOT NULL AUTO_INCREMENT,
  `ProductDetail_ID` int(200) NOT NULL,
  `ProductCategory_ID` int(200) NOT NULL,
  `Brand_ID` int(200) NOT NULL,
  `ProductName` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Price` decimal(6,2) unsigned NOT NULL,
  `Disccount` decimal(3,0) NOT NULL,
  `Image` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Product_ID`),
  KEY `FK_Product_ProductDetail_idx` (`ProductDetail_ID`),
  KEY `FK_Product_ProductCategory_idx` (`ProductCategory_ID`),
  KEY `FK_Product_Brand_idx` (`Brand_ID`),
  CONSTRAINT `FK_Product_Brand` FOREIGN KEY (`Brand_ID`) REFERENCES `brand` (`Brand_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_Product_ProductCategory` FOREIGN KEY (`ProductCategory_ID`) REFERENCES `productcategory` (`ProductCategory_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_Product_ProductDetail` FOREIGN KEY (`ProductDetail_ID`) REFERENCES `productdetail` (`ProductDetail_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `productcategory`
--

DROP TABLE IF EXISTS `productcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productcategory` (
  `ProductCategory_ID` int(200) NOT NULL AUTO_INCREMENT,
  `CategoryType` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Description` text COLLATE utf8_unicode_ci NOT NULL,
  `Image` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ProductCategory_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `productdetail`
--

DROP TABLE IF EXISTS `productdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productdetail` (
  `ProductDetail_ID` int(200) NOT NULL AUTO_INCREMENT,
  `Description` text COLLATE utf8_unicode_ci NOT NULL,
  `Ranking` int(11) NOT NULL,
  `Weight` decimal(6,3) NOT NULL,
  `Size` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Stock` int(200) NOT NULL,
  `ImageDetail1` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ImageDetail2` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ImageDetail3` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ImageDetail4` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ProductDetail_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `User_ID` int(200) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `LastName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Address` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Telephone` int(20) unsigned NOT NULL,
  `Email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Photo` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Password` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `PaymentMethod` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `UserCategory_ID` int(200) NOT NULL,
  `Age` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `Gender` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`User_ID`),
  KEY `FK_User_Category_idx` (`UserCategory_ID`),
  CONSTRAINT `FK_User_Category` FOREIGN KEY (`UserCategory_ID`) REFERENCES `usercategory` (`UserCategory_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usercategory`
--

DROP TABLE IF EXISTS `usercategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usercategory` (
  `UserCategory_ID` int(200) NOT NULL AUTO_INCREMENT,
  `CategoryType` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Description` text COLLATE utf8_unicode_ci NOT NULL,
  `Points` int(200) NOT NULL,
  PRIMARY KEY (`UserCategory_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-17 22:53:10
