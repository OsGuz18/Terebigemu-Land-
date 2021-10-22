//Declaración de las constantes a usar
const path = require("path") //Requerimos la paquetería de "path" incluida en node
let db = require('../database/models');
const Op = db.Sequelize.Op
//Configuración de los métodos del controlador 
let controlador={
    index:(req,res)=>{
        let ult 
        db.product.findAll({
            limit:5
        })
        .then((ultimos)=>{
                db.productdetail.findAll({
                distinct:true,
                include:["product"],
                where:{
                    Ranking:{[Op.lt]:3}
                },
                limit:5
            })
            .then((populares)=>{
               /* for(let i=1;i< 5;i++){
                    console.log(populares[i].dataValues.product[0].dataValues.Image)
                }*/
                
                //console.log(populares.get({plain:true}))
               res.render("index",{productos:ultimos,pop:populares})
            })
            
            
        })

        
        
    },

    /* login:(req,res)=>{
        res.render("Users/login")
    },

    register:(req,res)=>{
        res.render("Users/register")
    }, */

    shoppingCar:(req,res)=>{
        res.render("Products/shopping-car")
    },
}

module.exports=controlador; // Exportación del controlador 