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


DROP DATABASE IF EXISTS terebigemuland_db;
CREATE DATABASE terebigemuland_db;
USE terebigemuland_db;

/*Creación de tabla de categorias de usuario*/

DROP TABLE IF EXISTS `terebigemuland_db`.`userCategory`;
CREATE TABLE `terebigemuland_db`.`userCategory` (
  `UserCategory_ID` INT NOT NULL AUTO_INCREMENT,
  `CategoryType` VARCHAR(45) NOT NULL,
  `Description` LONGTEXT NOT NULL,
  `Points` INT NOT NULL,
  PRIMARY KEY (`UserCategory_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

/*Creación de tabla de usuarios*/

DROP TABLE IF EXISTS `terebigemuland_db`.`user`;
CREATE TABLE `terebigemuland_db`.`user` (
  `User_ID` INT NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(100) NOT NULL,
  `LastName` VARCHAR(100) NOT NULL,
  `Address` VARCHAR(100) NOT NULL,
  `Telephone` INT UNSIGNED NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  `Photo` VARBINARY(256) NOT NULL,
  `Password` VARCHAR(15) NOT NULL,
  `PaymentMethod` VARCHAR(20) NOT NULL,
  `UserCategory_ID` INT NOT NULL,
  PRIMARY KEY (`USER_ID`),
  INDEX `FK_User_Category_idx` (`UserCategory_ID` ASC),
  CONSTRAINT `FK_User_Category`
  FOREIGN KEY (`UserCategory_ID`)
  REFERENCES `terebigemu_land`.`UserCategory` (`UserCategory_ID`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

/*Creación de tabla de tipo de entrega*/

DROP TABLE IF EXISTS `terebigemuland_db`.`deliverytype`;
CREATE TABLE `terebigemuland_db`.`deliverytype` (
  `DeliveryType_ID` INT NOT NULL AUTO_INCREMENT,
  `Type` VARCHAR(45) NOT NULL,
  `Description` LONGTEXT NOT NULL,
  `RequiredDate` DATETIME NOT NULL,
  PRIMARY KEY (`DeliveryType_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

/*Creación de tabla de servicio de entrega*/

DROP TABLE IF EXISTS `terebigemuland_db`.`deliveryservice`;
CREATE TABLE `terebigemuland_db`.`deliveryservice` (
  `DeliveryService_ID` INT NOT NULL AUTO_INCREMENT,
  `DeliveryType_ID` INT NOT NULL,
  `DeliveryCompany` VARCHAR(45) NOT NULL,
  `Telephone` INT NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `HomePage` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`DeliveryService_ID`),
  INDEX `FK_DeliveryService_DeliveryType_idx` (`DeliveryType_ID` ASC),
  CONSTRAINT `FK_DeliveryService_DeliveryType`
    FOREIGN KEY (`DeliveryType_ID`)
    REFERENCES `terebigemuland_db`.`deliverytype` (`DeliveryType_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8
  COLLATE = utf8_unicode_ci;

/*Creación de tabla de órdenes o pedidos*/

DROP TABLE IF EXISTS `terebigemuland_db`.`orders`;
CREATE TABLE `terebigemuland_db`.`orders` (
  `Order_ID` INT NOT NULL AUTO_INCREMENT,
  `User_ID` INT NOT NULL,
  `DeliveryService_ID` INT NOT NULL,
  `OrderDate` DATETIME NOT NULL,
  `PaymentMethod` VARCHAR(45) NOT NULL,
  `OrderStatus` VARCHAR(45) NOT NULL,
  `Price` DECIMAL(6,2) NOT NULL,
  `Disccount` DECIMAL(3,0) NOT NULL,
  `Quantity` INT NOT NULL,
  `Taxes` VARCHAR(45) NOT NULL,
  `Total` DECIMAL(6,2) NOT NULL,
  `Paid` VARCHAR(45) NOT NULL,
  `PaymentDate` DATETIME NOT NULL,
  `Canceled` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Order_ID`),
  INDEX `FK_Order_User_idx` (`User_ID` ASC),
  INDEX `FK_Order_DeliveryService_idx` (`DeliveryService_ID` ASC),
  CONSTRAINT `FK_Order_User`
    FOREIGN KEY (`User_ID`)
    REFERENCES `terebigemuland_db`.`users` (`User_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Order_DeliveryService`
    FOREIGN KEY (`DeliveryService_ID`)
    REFERENCES `terebigemuland_db`.`deliveryservice` (`DeliveryService_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

/*Creación de tabla de detalles de productos*/

DROP TABLE IF EXISTS `terebigemuland_db`.`productdetail`;
CREATE TABLE `terebigemuland_db`.`productdetail` (
  `ProductDetail_ID` INT NOT NULL AUTO_INCREMENT,
  `Description` LONGTEXT NOT NULL,
  `Ranking` INT NOT NULL,
  `Weight` DECIMAL(6,3) NOT NULL,
  `Size` VARCHAR(45) NOT NULL,
  `Stock` INT NOT NULL,
  `ImageDetail1` VARBINARY(255) NOT NULL,
  `ImageDetail2` VARBINARY(255) NOT NULL,
  `ImageDetail3` VARBINARY(255) NOT NULL,
  `ImageDetail4` VARBINARY(255) NOT NULL,
  PRIMARY KEY (`ProductDetail_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

/*Creación de tabla de categorias de productos*/

DROP TABLE IF EXISTS `terebigemuland_db`.`productCategory`;
CREATE TABLE `terebigemuland_db`.`productCategory` (
  `ProductCategory_ID` INT NOT NULL AUTO_INCREMENT,
  `CategoryType` VARCHAR(45) NOT NULL,
  `Description` LONGTEXT NOT NULL,
  `Image` VARBINARY(256) NOT NULL,
  PRIMARY KEY (`ProductCategory_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

/*Creación de tabla de marcas*/

DROP TABLE IF EXISTS `terebigemuland_db`.`brand`;
CREATE TABLE `terebigemuland_db`.`brand` (
  `Brand_ID` INT NOT NULL AUTO_INCREMENT,
  `CompanyName` VARCHAR(45) NOT NULL,
  `CompanyContact` VARCHAR(45) NOT NULL,
  `ContactAddress` VARCHAR(45) NOT NULL,
  `ContactPhone` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `HomePage` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Brand_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

/*Creación de tabla de productos*/

DROP TABLE IF EXISTS `terebigemuland_db`.`product`;
CREATE TABLE `terebigemuland_db`.`product` (
  `Product_ID` INT NOT NULL AUTO_INCREMENT,
  `ProductDetail_ID` INT NOT NULL,
  `ProductCategory_ID` INT NOT NULL,
  `Brand_ID` INT NOT NULL,
  `ProductName` VARCHAR(45) NOT NULL,
  `Price` DECIMAL(6,2) NOT NULL,
  `Disccount` DECIMAL(3,0) NOT NULL,
  `Image` VARBINARY(255) NOT NULL,
  PRIMARY KEY (`Product_ID`),
  INDEX `FK_Product_ProductDetail_idx` (`ProductDetail_ID` ASC),
  INDEX `FK_Product_ProductCategory_idx` (`ProductCategory_ID` ASC),
  INDEX `FK_Product_Brand_idx` (`Brand_ID` ASC),
  CONSTRAINT `FK_Product_ProductDetail`
    FOREIGN KEY (`ProductDetail_ID`)
    REFERENCES `terebigemuland_db`.`productdetail` (`ProductDetail_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Product_ProductCategory`
    FOREIGN KEY (`ProductCategory_ID`)
    REFERENCES `terebigemuland_db`.`productcategory` (`ProductCategory_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Product_Brand`
    FOREIGN KEY (`Brand_ID`)
    REFERENCES `terebigemuland_db`.`brand` (`Brand_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

/*Creación de tabla intermedia Orden-Producto*/

DROP TABLE IF EXISTS `terebigemuland_db`.`orderproduct`;
CREATE TABLE `terebigemuland_db`.`orderproduct` (
  `OrderProduct_ID` INT NOT NULL AUTO_INCREMENT,
  `Order_ID` INT NOT NULL,
  `Product_ID` INT NOT NULL,
  PRIMARY KEY (`OrderProduct_ID`),
  INDEX `FK_OrderProduct_Order_idx` (`Order_ID` ASC),
  INDEX `FK_OrderProduct_Product_idx` (`Product_ID` ASC),
  CONSTRAINT `FK_OrderProduct_Order`
    FOREIGN KEY (`Order_ID`)
    REFERENCES `terebigemuland_db`.`order` (`Order_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_OrderProduct_Product`
    FOREIGN KEY (`Product_ID`)
    REFERENCES `terebigemuland_db`.`product` (`Product_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;



