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
        
       let user=req.session.userLogged
       let ordenactual
        db.orders.findOne({
            where:{
                User_ID: user.User_ID
            }
        })
        .then((ordenes)=>{
            if(ordenes == null){
                db.orders.create({
                    User_ID: user.User_ID,
                    DeliveryService_ID:"",
                    OrderStatus: "En creacion",
                    Price:"",
                    Disccount:"",
                    Quantity:"",
                    Taxes:"",
                    Total:"",
                    Fecha_pedido:""
                })
                .then(()=>{
                    res.render("Products/shopping-car")
                })
            }else{
                db.orders.findAll({
                    where:{
                        User_ID:user.User_ID
                    },
                    include: {association:"product" ,include:{
                        association:"productdetail"
                    }}
                })
                .then((ordenescont)=>{
                   // console.log(ordenescont[0].dataValues.product)
                   
                   for(let i=0;i < ordenescont.length;i++){
                        if(ordenescont[i].dataValues.OrderStatus == "En creacion"){
                            ordenactual=ordenescont[i].dataValues
                        }
                    }
                    //console.log(ordenactual)
                   // console.log(ordenactual.product[0].dataValues.productdetail.dataValues.Description)
                    res.render("Products/shopping-car",{productos:ordenactual,user:user})
                })
            }
        })
       // res.render("Products/shopping-car")
    },
}

module.exports=controlador; // Exportación del controlador 