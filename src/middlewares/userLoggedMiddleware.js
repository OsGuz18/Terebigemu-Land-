const path = require('path');
const fs = require('fs');  
const bcrypt = require('bcryptjs')
const usersFilePath = path.join(__dirname, '../data/users.json'); //Definimos la ruta que contiene nuestra base de datos 

let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); //Extraemos nuestros datos y los ponemos en formato de array

function userLoggedMiddleware(req,res,next){
    
    res.locals.isLogged=false;
    
    let emailInCookie=req.cookies.userEmail
    if ( emailInCookie){
        users.forEach(user => {
            let compareEmail = bcrypt.compareSync(emailInCookie, user.email)
            if(compareEmail){
                req.session.userLogged = user
            }
        });
    }
    
    
    if(req.session && req.session.userLogged){
        res.locals.isLogged=true;
        res.locals.userLogged = req.session.userLogged
    }


    next();
}

module.exports = userLoggedMiddleware