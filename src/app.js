//Declaración de constantes a usar 
const express = require("express");  // Requerimos la paquetería "express" (previamente instalado)
const path = require("path"); // Requerimos la paquetería "path" contenido en node
const app = express(); // Iniciamos express para la aplicación
const publicPath = path.resolve(__dirname,'../public'); // Declaramos la ruta pública mediante el módulo "path"
const methodOverride = require("method-override"); //Requerimos la paquetería "method-override" (previamente instalada)
const mainRouter = require("./routes/mainRouter"); //Requerimos el ruteador principal 
const productRouter = require('./routes/productRouter'); //Requerimos el ruteador de productos 
const userRouter = require("./routes/userRouter"); //Requerimos el ruteador de usuarios
const session = require("express-session");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware")
const cookies = require("cookie-parser")
const cors = require('cors')
app.use(cors())

app.set("view engine","ejs"); //Seteamos la aplicación para ocupar ejs (previamente instalado)                           
app.set("views",path.join(__dirname , "views")); //Declaramos la carpeta "default" para las vistas


// Configuración de las propiedades que usará la aplicación 
app.use(session({
    secret:"code",
    resave: false,
    saveUninitialized:false
}));
app.use(cookies()) 

app.use(express.static(publicPath)); //Declaramos el uso de "publicPath" como carpeta estática 
app.use(express.urlencoded({extended: false})); 
app.use(express.json()); //Declaramos el uso de formato JSON
app.use(methodOverride("_method")); //Declaramos el uso de methodOverride para poder usar PUT y DELETE en HTTP 
/*app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())*/
                           

const usersAPIRouter = require("./routes/api/userAPIRouter")
const productsAPIRouter = require("./routes/api/productsAPIRouter")
const categoryAPIRouter = require("./routes/api/categoryAPIRouter")

app.use(userLoggedMiddleware);

app.use("/api/users",usersAPIRouter)
app.use("/api/products",productsAPIRouter)
app.use("/api/category",categoryAPIRouter)


app.use('/products', productRouter); //Configuración del product Router
app.use("/users",userRouter); //Configuración del users Router*/
app.use("/",mainRouter); //Configuramos la ruta principaL

// Configuramos el arranque del servidor y el puerto
app.listen(3030, () => {
    console.log('Servidor corriendo en el puerto 3030'); 
});






