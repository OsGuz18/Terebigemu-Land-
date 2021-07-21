const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname,'../public');

app.use(express.static(publicPath));
app.use(express.json());                                    //configuración para el json

app.set("view engine","ejs")                           
app.set("views",path.join(__dirname , "views") )

const mainRouter = require("./routes/mainRouter")
const productRouter = require('./routes/productRouter');    ///Nueva constante requerida para el productRouter

app.use("/",mainRouter)
app.use('/productList', productRouter);                     ///Configuración del product Router

app.listen(3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
});


//Configuración para PUT y DELETE
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


