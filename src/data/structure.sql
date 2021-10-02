DROP DATABASE IF EXISTS terebigemuland_db;
CREATE DATABASE terebigemuland_db;
USE terebigemuland_db;


/*Creación de tabla de empleados/administrador*/

DROP TABLE IF EXISTS `terebigemu_land`.`administrator/employee`;
CREATE TABLE `terebigemu_land`.`administrator/employee` (
  `Administrator_ID` INT NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(100) NOT NULL,
  `LastName` VARCHAR(100) NOT NULL,
  `BirthDate` DATE NULL,
  `HireDate` DATETIME NOT NULL,
  `Address` VARCHAR(100) NOT NULL,
  `Telephone` INT UNSIGNED NOT NULL,
  `Photo` VARBINARY(256) NOT NULL,
  `Password` VARCHAR(15) NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));
  ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

/*Creación de tabla de clientes*/

DROP TABLE IF EXISTS `terebigemu_land`.`users`;
CREATE TABLE `terebigemu_land`.`users` (
  `User_ID` INT NOT NULL AUTO_INCREMENT,
  `FisrtName` VARCHAR(100) NOT NULL,
  `LastName` VARCHAR(100) NOT NULL,
  `Address` VARCHAR(100) NOT NULL,
  `Telephone` INT UNSIGNED NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  `Photo` VARBINARY(256) NOT NULL,
  `Password` VARCHAR(15) NOT NULL,
  `PaymentMethod` VARCHAR(20) NOT NULL,
  `UserCategory_ID` INT NOT NULL,
  PRIMARY KEY (`idCustomer`))
  INDEX `FK_User_Category_idx` (`UserCategory_ID` ASC) VISIBLE;
  CONSTRAINT `FK_User_Category`
  FOREIGN KEY (`UserCategory_ID`)
  REFERENCES `terebigemu_land`.`category` (`Category_Id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

/*Creación de tabla de categorias de usuario*/

DROP TABLE IF EXISTS `terebigemu_land`.`usercategory`;
CREATE TABLE `terebigemu_land`.`usercategory` (
  `UserCategory_ID` INT NOT NULL AUTO_INCREMENT,
  `CategoryType` VARCHAR(45) NOT NULL,
  `Description` LONGTEXT NOT NULL,
  `Points` INT NOT NULL,
  PRIMARY KEY (`UserCategory_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


/*Creación de tabla de órdenes o pedidos*/

DROP TABLE IF EXISTS `terebigemu_land`.`orders/ShoppingCar`;
CREATE TABLE `terebigemu_land`.`orders/ShoppingCar` (
  `Orders_ID` INT NOT NULL AUTO_INCREMENT,
  `Administrator_ID` INT NOT NULL,
  `User_ID` INT NOT NULL,
  `OrderDate` DATETIME NOT NULL,
  `RequiredDate` DATETIME NOT NULL,
  `DeliveryDate` DATETIME NOT NULL,
  `DeliveryService` VARCHAR(100) NOT NULL,
  `DeliveryAddress` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`Orders_ID`),
  INDEX `FK_Orders_User_idx` (`User_ID` ASC) VISIBLE,
  INDEX `FK_Orders_Administrator_idx` (`Administrator_ID` ASC) VISIBLE,
  CONSTRAINT `FK_Orders_Customers`
    FOREIGN KEY (`User_ID`)
    REFERENCES `terebigemu_land`.`customer` (`User_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Orders_Administrator_Employee`
    FOREIGN KEY (`Administrator_ID`)
    REFERENCES `terebigemu_land`.`administrator/employee` (`Administrator_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

/*Creación de tabla de categorias de productos*/

DROP TABLE IF EXISTS `terebigemu_land`.`product_category`;
CREATE TABLE `terebigemu_land`.`product_category` (
  `ProductCategory_ID` INT NOT NULL AUTO_INCREMENT,
  `CategoryType` VARCHAR(45) NOT NULL,
  `Description` LONGTEXT NOT NULL,
  `Image` VARBINARY(256) NOT NULL,
  PRIMARY KEY (`ProductCategory_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

/*Creación de tabla de proveedores*/

DROP TABLE IF EXISTS `terebigemu_land`.`suppliers`;
CREATE TABLE `terebigemu_land`.`suppliers` (
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

DROP TABLE IF EXISTS `terebigemu_land`.`products`;
CREATE TABLE `terebigemu_land`.`products` (
  `Products_ID` INT NOT NULL AUTO_INCREMENT,
  `ProductCategory_ID` INT NOT NULL,
  `Supplier_ID` INT NOT NULL,
  `Price` DECIMAL(6,2) NOT NULL,
  `Quantity` INT NOT NULL,
  `Disccount` DECIMAL(2,1) NOT NULL,
  `Image` VARBINARY(256) NOT NULL,
  PRIMARY KEY (`Products_ID`),
  INDEX `FK_Product_Category_idx` (`ProductCategory_ID` ASC) VISIBLE,
  INDEX `FK_Product_Supplier_idx` (`Supplier_ID` ASC) VISIBLE,
  CONSTRAINT `FK_Product_Category`
    FOREIGN KEY (`ProductCategory_ID`)
    REFERENCES `terebigemu_land`.`category` (`Category_Id`)
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

