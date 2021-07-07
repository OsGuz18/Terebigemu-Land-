const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname,'../public');

app.use(express.static(publicPath));

app.set("view engine","ejs")
app.set("views",path.join(__dirname , "views") )

const mainRouter = require("./routes/mainRouter")

app.use("/",mainRouter)

app.listen(3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
});





