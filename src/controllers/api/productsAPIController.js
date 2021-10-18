
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Brand = require('../../database/models/Brand');

const Products = db.product

productsAPIController={
    productsList:(req,res) =>{
        console.log("voy")
        Products.findAll({
            include:["brand","productdetail","productcategory"]

        })
        .then((products)=>{
            res.json(products)
        })
    },

    productDetail:(req,res) =>{
        Products.findByPk(req.params.id,{
            include:["brand","productdetail","productcategory"]
        })
        .then(product=>{
            let respuesta ={
                meta:{
                    status:200,
                    url:"api/users/:id"
                },
                data:product
            }
            res.json(respuesta)
        })
    }

}

module.exports = productsAPIController