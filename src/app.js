//Declaración de constantes a usar 
const express = require("express");  // Requerimos la paquetería "express" (previamente instalado)
const path = require("path"); // Requerimos la paquetería "path" contenido en node
const app = express(); // Iniciamos express para la aplicación
const publicPath = path.resolve(__dirname,'../public'); // Declaramos la ruta pública mediante el módulo "path"
const methodOverride = require("method-override"); //Requerimos la paquetería "method-override" (previamente instalada)
const mainRouter = require("./routes/mainRouter"); //Requerimos el ruteador principal 
const productRouter = require('./routes/productRouter'); //Requerimos el ruteador de productos 
const userRouter = require("./routes/userRouter"); //Requerimos el ruteador de usuarios

app.set("view engine","ejs"); //Seteamos la aplicación para ocupar ejs (previamente instalado)                           
app.set("views",path.join(__dirname , "views")); //Declaramos la carpeta "default" para las vistas


// Configuración de las propiedades que usará la aplicación 
app.use(express.static(publicPath)); //Declaramos el uso de "publicPath" como carpeta estática 
app.use(express.urlencoded({extended: false})); 
app.use(express.json()); //Declaramos el uso de formato JSON
app.use(methodOverride("_method")); //Declaramos el uso de methodOverride para poder usar PUT y DELETE en HTTP                             
app.use("/",mainRouter); //Configuramos la ruta principaL
app.use('/products', productRouter); //Configuración del product Router
app.use("/users",userRouter); //Configuración del users Router

// Configuramos el arranque del servidor y el puerto
app.listen(3030, () => {
    console.log('Servidor corriendo en el puerto 3030'); 
});






