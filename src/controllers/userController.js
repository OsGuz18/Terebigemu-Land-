//Declaración de las constantes a utilizar 
const path = require('path'); //Requerimos la paquetería "path" incluida en node
let db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const fs = require('fs');  //Requerimos la paquetería de filesystem incluida en node
const {validationResult} =require("express-validator")
const bcrypt = require('bcryptjs');






const controller = {
    register:(req,res) =>{
        res.render("Users/registerUser")
    },

    storage:(req,res) => {
        
        let errores =validationResult(req);
        let find = 0;
        
        if(errores.errors.length > 0){
          return  res.render("Users/registerUser",{
                errors:errores.mapped(),
                oldData: req.body
            })
        }
        
        db.user.findOne({
            where:{
                Email: req.body.email
            }
        })
        .then((resultado) =>{
            if(resultado != null){
                find=1
            }
        })
        .then(()=>{
            if(find == 1){
                return res.render("Users/registerUser",{
                    errors:{
                        email:{
                            msg: "Este email ya esta registrado"
                        }
                    },
                    oldData: req.body
                })
            }else{
                
                let passEncrypt = bcrypt.hashSync(req.body.password,10);
                db.user.create({
                    FirstName:req.body.name,
                    LastName:req.body.lastName,
                    Address:req.body.address,
                    Telephone:req.body.phone,
                    Email:req.body.email,
                    Photo:req.file.filename,
                    Password:passEncrypt,
                    UserCategory_ID: 0,
                    Age:req.body.age,
                    Gender:req.body.gender
                })
            }
    
            res.redirect("/");
        })
        
        /*users.forEach(user => {
            let compareEmail = bcrypt.compareSync(req.body.email, user.email)
            if(compareEmail){
                find = 1
            }
        });

        if(find == 1){
            return res.render("Users/registerUser",{
                errors:{
                    email:{
                        msg: "Este email ya esta registrado"
                    }
                },
                oldData: req.body
            })
        }else{
            id=users.length + 1
            let newUser={}
            let passEncrypt = bcrypt.hashSync(req.body.password,10);
            let emailEncrypt = bcrypt.hashSync(req.body.email,10);
            newUser={
                id: Date.now() + id,
                name:req.body.name,
                lastName: req.body.lastName,
                age: req.body.age,
                email:emailEncrypt,
                password:passEncrypt,
                gender:req.body.gender,
                address:req.body.address,
                level:req.body.level,
                Image: req.file.filename
            }   
            users.push(newUser);
            userListJSON=JSON.stringify(users,null,2);
            fs.writeFileSync(usersFilePath, userListJSON);
            res.redirect("/");
        }*/
        
    },

    login: (req,res)=>{
        res.render("Users/login")
    },

    loginProcces:(req,res)=>{
       let errores =validationResult(req);
       let userData
        if(errores.errors.length > 0){
            return  res.render("Users/login",{
                  errors:errores.mapped(),
                  oldData: req.body
              })
        }

        let test = 0
         
        db.user.findOne({
            where:{
                Email: req.body.email
            }
        })
        .then((resultado) =>{
            let userPassword = bcrypt.compareSync(req.body.password,resultado.Password)
            if (userPassword){
                test=1
                userData = resultado.dataValues
                delete userData.Password;

                req.session.userLogged = userData
                
                if(req.body.remind){
                    res.cookie("userEmail",req.body.email,{maxAge:(1000*60)*60})
                }
                
            }
        }).then(()=>{
            if(test==1){
                return res.redirect("/users/profile");
            }else{
                return res.render("Users/login",{
                    errorscred: {
                        email:{
                            msg:"Credenciales inválidas"
                        }
                    }
                })
        
            }
            
        })

        
        

       /* users.forEach(user => {
            let userToLogin = bcrypt.compareSync(req.body.email, user.email)
            if(userToLogin){
                let userPassword = bcrypt.compareSync(req.body.password,user.password)
                if (userPassword){
                    delete user.password;
                    req.session.userLogged= user
                    if(req.body.remind){
                        res.cookie("userEmail",req.body.email,{maxAge:(1000*60)*60})
                    }

                    return res.redirect("/users/profile");
                }
            }

            return res.render("Users/login",{
                errorscred: {
                    email:{
                        msg:"Credenciales inválidas"
                    }
                }
            })
        });*/
    },
    
    edit:(req,res)=>{
        db.user.findByPk(req.params.id)
         .then((ruser)=>{
             user=ruser.dataValues
             res.render("Users/editUser2",{user})
         })
    },

    edit1:(req,res,next) => {
        console.log(req)

    },

    profile:(req,res)=>{
        res.render("Users/userProfile",{
            user: req.session.userLogged
        })
    },
    
    logout:(req,res)=>{
       
        res.clearCookie("userEmail")
        req.session.destroy()
        
        res.redirect("/")
    },

    
}

module.exports= controller; //Exportación del controlador 