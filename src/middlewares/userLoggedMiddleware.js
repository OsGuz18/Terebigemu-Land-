const path = require('path');
const fs = require('fs');  
const bcrypt = require('bcryptjs')
const usersFilePath = path.join(__dirname, '../data/users.json'); //Definimos la ruta que contiene nuestra base de datos 
let db = require('../database/models');

let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); //Extraemos nuestros datos y los ponemos en formato de array

function userLoggedMiddleware(req,res,next){
    

    let emailInCookie=req.cookies.userEmail
    if (emailInCookie){
        res.locals.isLogged=true;
        db.user.findOne({
            where:{
                Email: emailInCookie
            }
        }).then((resultado)=>{
            userData = resultado.dataValues
            if(resultado != null){
             return userData
            }
        }).then((resultado)=>{
            req.session.userLogged = resultado
            
            if( req.session.userLogged){
                res.locals.isLogged=true;
                res.locals.userLogged = req.session.userLogged
                
            }
            next();
        })
    }else{
        if(req.session && req.session.userLogged){
            res.locals.isLogged=true;
            res.locals.userLogged = req.session.userLogged
            
        }
        next();
    }

    
    
    
}

module.exports = userLoggedMiddleware