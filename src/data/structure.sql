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


/*Creación de tabla de empleados/administrador*/

DROP TABLE IF EXISTS `terebigemuland_db`.`employee`;
CREATE TABLE `terebigemuland_db`.`employee` (
  `employee_ID` INT NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(100) NOT NULL,
  `LastName` VARCHAR(100) NOT NULL,
  `BirthDate` DATE NULL,
  `HireDate` DATETIME NOT NULL,
  `Address` VARCHAR(100) NOT NULL,
  `Telephone` INT UNSIGNED NOT NULL,
  `Photo` VARBINARY(256) NOT NULL,
  `Password` VARCHAR(15) NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`employee_ID`))
  ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

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

/*Creación de tabla de clientes*/

DROP TABLE IF EXISTS `terebigemuland_db`.`users`;
CREATE TABLE `terebigemuland_db`.`users` (
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


/*Creación de tabla de órdenes o pedidos*/

DROP TABLE IF EXISTS `terebigemuland_db`.`orders`;
CREATE TABLE `terebigemuland_db`.`orders` (
  `Order_ID` INT NOT NULL AUTO_INCREMENT,
  `employee_ID` INT NOT NULL,
  `User_ID` INT NOT NULL,
  `OrderDate` DATETIME NOT NULL,
  `RequiredDate` DATETIME NOT NULL,
  `DeliveryDate` DATETIME NOT NULL,
  `DeliveryService` VARCHAR(100) NOT NULL,
  `DeliveryAddress` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`Order_ID`),
  INDEX `FK_Orders_employee_idx` (`employee_ID` ASC),
  INDEX `FK_Orders_User_idx` (`User_ID` ASC),
  CONSTRAINT `FK_Orders_Employee`
    FOREIGN KEY (`employee_ID`)
    REFERENCES `terebigemu_land`.`employee` (`employee_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Orders_Users`
    FOREIGN KEY (`User_ID`)
    REFERENCES `terebigemu_land`.`users` (`User_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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

/*Creación de tabla de proveedores*/

DROP TABLE IF EXISTS `terebigemuland_db`.`suppliers`;
CREATE TABLE `terebigemuland_db`.`suppliers` (
  `Supplier_ID` INT NOT NULL AUTO_INCREMENT,
  `CompanyName` VARCHAR(45) NOT NULL,
  `ContactName` VARCHAR(45) NOT NULL,
  `Address` VARCHAR(100) NOT NULL,
  `Telephone` INT NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `HomePage` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Supplier_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

/*Creación de tabla de productos*/

DROP TABLE IF EXISTS `terebigemuland_db`.`products`;
CREATE TABLE `terebigemuland_db`.`products` (
  `Product_ID` INT NOT NULL AUTO_INCREMENT,
  `ProductCategory_ID` INT NOT NULL,
  `Supplier_ID` INT NOT NULL,
  `Price` DECIMAL(6,2) NOT NULL,
  `Quantity` INT NOT NULL,
  `Disccount` DECIMAL(3,1) NOT NULL,
  `Image` VARBINARY(256) NOT NULL,
  PRIMARY KEY (`Product_ID`),
  INDEX `FK_Product_Category_idx` (`ProductCategory_ID` ASC),
  INDEX `FK_Product_Supplier_idx` (`Supplier_ID` ASC),
  CONSTRAINT `FK_Product_Category`
    FOREIGN KEY (`ProductCategory_ID`)
    REFERENCES `terebigemu_land`.`productCategory` (`ProductCategory_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Product_Supplier`
    FOREIGN KEY (`Supplier_ID`)
    REFERENCES `terebigemu_land`.`suppliers` (`Supplier_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

/*Creación de tabla de detalles de productos*/

CREATE TABLE `terebigemuland_db`.`productdetail` (
  `ProductDetail_ID` INT NOT NULL AUTO_INCREMENT,
  `Order_ID` INT NOT NULL,
  `Product_ID` INT NOT NULL,
  `Price` DECIMAL(6,2) NOT NULL,
  `Quantity` INT NOT NULL,
  `Disccount` DECIMAL(3,1) NOT NULL,
  PRIMARY KEY (`ProductDetail_ID`),
  INDEX `FK_Order_idx` (`Order_ID` ASC),
  INDEX `FK_Product_idx` (`Product_ID` ASC),
  CONSTRAINT `FK_Order`
    FOREIGN KEY (`Order_ID`)
    REFERENCES `terebigemuland_db`.`orders` (`Order_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Product`
    FOREIGN KEY (`Product_ID`)
    REFERENCES `terebigemuland_db`.`products` (`Product_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


