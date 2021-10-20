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
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'Nintendo','Contacto N','Dirección N','22222222','N@email.com','.........'),(2,'Xbox','Contando X','Dirección X','2222222','X@email.com','.........'),(3,'PlayStation','Contacto P ','Dirección P','2222222','P@email.com','.........'),(4,'Adidas','Contacto A','Direeción A','2222222','A@email.com','.........'),(5,'Hot Toys','Contacto H','Dirección H','2222222','H@email.com','...........'),(6,'Hasbro','Contacto Ha','Dirección Ha','2222222','Ha@email.com','...........');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `deliveryservice`
--

LOCK TABLES `deliveryservice` WRITE;
/*!40000 ALTER TABLE `deliveryservice` DISABLE KEYS */;
INSERT INTO `deliveryservice` VALUES (0,1,'Estafeta',222222,'Estafeta@email.com','...........');
/*!40000 ALTER TABLE `deliveryservice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `deliverytype`
--

LOCK TABLES `deliverytype` WRITE;
/*!40000 ALTER TABLE `deliverytype` DISABLE KEYS */;
/*!40000 ALTER TABLE `deliverytype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orderproduct`
--

LOCK TABLES `orderproduct` WRITE;
/*!40000 ALTER TABLE `orderproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,1,0,0,'Nintendo Switch OLED',10000.00,0,'product-1634532177195.jpg'),(2,2,2,4,'Spider-Man 2099',10000.00,20,'product-1634532236496.jpg'),(3,3,0,2,'Crash Bandicoot 4',1200.00,10,'product-1634532427501.jpg'),(4,2,2,4,'Sillón Simpson',1400.00,0,'product-1634532490349.jpg'),(5,2,2,4,'Reactor Arc',800.00,0,'product-1634532554783.jpg'),(6,6,0,0,'Xbox Series X',14000.00,5,'product-1634532679718.jpeg'),(7,7,0,2,'Play Station 5',14000.00,5,'product-1634532910218.jpg'),(8,8,0,0,'Zelda Breath of the Wild',1200.00,5,'product-1634533343153.jpg'),(9,9,1,1,'Assassin\'s Creed Valhalla',900.00,0,'product-16345335876470.553335415569236.jpg'),(10,10,1,2,'Red Dead Redemption 2',600.00,0,'product-16345337262650.6053559743556765.jpg');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productcategory`
--

LOCK TABLES `productcategory` WRITE;
/*!40000 ALTER TABLE `productcategory` DISABLE KEYS */;
INSERT INTO `productcategory` VALUES (0,'Videojuegos','Software','404'),(1,'Consolas','Hardware','404'),(2,'Figuras','Figuras de colección de diferentes marcas','404'),(3,'Ropa','Productos textiles de la tienda','404'),(4,'Equipo de computo','Hardware para PC y accesorios','404'),(5,'Peliculas','Peliculas en diferentes formatos','404');
/*!40000 ALTER TABLE `productcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productdetail`
--

LOCK TABLES `productdetail` WRITE;
/*!40000 ALTER TABLE `productdetail` DISABLE KEYS */;
INSERT INTO `productdetail` VALUES (1,'La nueva consola de la familia Nintendo ',1,0.500,'20x50x10',1000,'product-1634532177195.jpg','product-1634532177196.jpg','default_product.jpg','default_product.jpg'),(2,'Figura de colección ',2,1.500,'140x60x10',500,'product-1634532236500.jpg','product-1634532236507.jpg','product-1634532236513.jpg','default_product.jpg'),(3,'La nueva aventura del bandicoot mas famoso',3,0.200,'15x10x2',10000,'product-1634532427503.jpg','product-1634532427506.jpg','product-1634532427510.jpg','default_product.jpg'),(4,'Figura de colección ',2,0.450,'123x100x80',500,'default_product.jpg','default_product.jpg','default_product.jpg','default_product.jpg'),(5,'Figura de colección ',5,0.230,'15x15x15',5,'default_product.jpg','default_product.jpg','default_product.jpg','default_product.jpg'),(6,'La nueva consola de Microsoft',1,1.100,'80x30x30',10,'product-1634532679719.jpg','product-1634532679719.jpg','product-1634532679719.jpg','product-1634532679719.jpg'),(7,'Llega la nueva generación de sony ',2,1.100,'120x30x30',10,'default_product.jpg','default_product.jpg','default_product.jpg','default_product.jpg'),(8,'Uno de los mejores juegos de nintendo switch',1,0.200,'15x10x2',100,'default_product.jpg','default_product.jpg','default_product.jpg','default_product.jpg'),(9,'Unete a la experiencia vikinga de la mano de Eivor',7,0.200,'15x10x2',100,'product-1634533473227.jpg','product-1634533473229.jpg','default_product.jpg','default_product.jpg'),(10,'Unete a la aventura vaquera ',3,0.200,'15x10x2',100,'product-16345337077830.1764657976059758.jpg','product-16345337077830.8702254545249801.jpg','product-16345337077840.7347782030443708.jpg','default_product.jpg');
/*!40000 ALTER TABLE `productdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Osmar','Guzman','Calle falsa 1234',2233445566,'osmar.guzman@alumno.buap.mx','user-1634529302525.jpg','$2a$10$v6JXFr/u8EnclIuIXS63kuH0q25ykzOzZdWaM.dIREZQ5KZSu7oEW',0,'26','M'),(2,'Enrique','Guzman','Calle inventada 1234',4294967295,'enrique@gmail.com','user-1634529453010.jpg','$2a$10$9Ii9A9AnhiUKsCd8dNQ0SuvtLtvFYtmcYOhPmvBnC/s2PVTNXau/y',0,'19','M'),(3,'Carlos','Vega','Callle falsa 1234',2233445566,'CarlosVe@email.com','user-1634529898447.jpg','$2a$10$bqUNNr.eByef7HoKxZbkLeHMLv.eKwxaM2eeAW8Yhwi4TRcRlmyBC',0,'45','M'),(4,'Susana','Carrera','Calle inventada 1234',4294967295,'susi@email.com','user-1634529977568.jpg','$2a$10$pgwjUD7B8cEDRo5ec75rfeVpq.XhHni6S4b3BBEe9oU0Fk3X0aiVK',0,'44','F'),(5,'Karla','Martinez','Calle falsa 1234',2233445566,'karla@email.com','user-1634530129732.jpg','$2a$10$yP9cJRVUYw1a512cMIWlkOVkVgsLKMkpbbe9iuXLjy3BPhka0rJna',0,'24','F'),(6,'Juan','Mariscal','Calle inventada 34566',22334455,'Juanito@email.com','user-1634530227706.jpg','$2a$10$1YVb6jUnh.uBj7xYzC8Ha.aiYGbeNH5NtTyThULnted6tyWg15Msy',0,'19','M'),(7,'Humberto','Mariscal','Calle de ficción 456',4294967295,'Humberto@email.com','user-1634530519422.jpg','$2a$10$ej4PAElvAAEhcvCl281JLOtR1NvrF.hTUUFuv8b/vJTy8lkD1/RJ.',0,'27','M'),(8,'Maria','Gonzales','Calle falsa 123',2233445566,'maria@email.com','user-1634530614917.jpg','$2a$10$GfncxHxMZmiMseEXGZdId.R1HRh4Zhz76zH5O8EDjwgjt8YoTdpYS',0,'30','F'),(9,'Fernanda','Palafox','AV inventada 34',4294967295,'fernandita@email.com','user-1634530766448.jpg','$2a$10$KMCXNxBP0KTcpdjC7LGQ8.ZW02WXYh23ZQHmSuQUwxkp8EimnwwK6',0,'28','F'),(10,'Ivan','García','AV. superrapida 56',2233445566,'ivan@email.com','user-1634530916049.jpg','$2a$10$NdSrP/qvV0nAn5oVFXBbjeDs/ECcjOas9A95CxXjgTgn0fjMwrWxK',0,'21','M'),(11,'Christian','Fuentes','Calle falsa 123',4294967295,'fuentes@email.com','user-1634531020651.jpg','$2a$10$xRM6gM5Nb2rQU5kSR7PuJOgHJyej.Gtf8NQh107uEr/YDuLmD7Nry',0,'45','M'),(12,'Alberto','Gomez','Calle falsa 345',2233445566,'Alberto@email.com','user-1634531228823.jpg','$2a$10$YXqUBjNsj3f747lgnDDA.ebgCcFkt1CuiOr.PfSIgaKomR5tVS7qy',0,'32','M'),(13,'Teresa','Guzman','Avenida siempre viva',2233445566,'Tere@email.com','user-1634531292964.jpg','$2a$10$Kv3K5Rs3S2hUsMurV0aGv.CaeXigD9iDq7YhjTT.xY9nVcVCcXgRC',0,'45','F'),(14,'Emilio','Alvarez','calle falsa 201',4294967295,'Emilio@email.com','user-1634531771292.jpg','$2a$10$sGbUk77MF9CcB0NRlqr3ke.gbqpbaGU.d1aB5eKOWOgLlYRm1NInm',0,'34','M'),(15,'Ricardo','Cruz','AV inventada 34',4294967295,'ricardo@email.com','user-1634531913526.jpg','$2a$10$BpvZeeRU8DhfFng8cL2wlOPm8NMCeBbtC/fPSKvNr.qmrTL4cCVmy',0,'24','M');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `usercategory`
--

LOCK TABLES `usercategory` WRITE;
/*!40000 ALTER TABLE `usercategory` DISABLE KEYS */;
INSERT INTO `usercategory` VALUES (0,'Basico','Es el nivel por default al crear una cuenta',0),(1,'Bronce','Se alcanza al completar 10 compras en la tienda',200),(2,'Plata','Se alcanza al completar 25 compras en la tienda',500),(3,'Oro','Se alcanza al compleat 50 compras en la tienda',1000),(4,'Platinum','Se alcanza al completar 100 compras en la tienda',2000),(5,'Master','Es el nivel otorgado a colaboradores y trabajadores de la tienda ',1000000);
/*!40000 ALTER TABLE `usercategory` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-18  0:10:40
