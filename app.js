const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname,'./public');

app.use(express.static(publicPath));

app.listen(3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
});

app.get("/",(req,res) => {
    res.send("Hola mundo")
});

app.get("/register",(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
});

app.get("/shopping-car",(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./views/shopping-car.html'))
});