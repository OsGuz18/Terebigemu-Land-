const path = require('path')
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const Products = db.product

productsAPIController={
    productsList:(req,res) =>{
        Products.findAll({
            include:["brand","productdetail","productcategory"]
        })
        .then(products =>{
            let respuesta ={
                meta:{
                    status:200,
                    url:"/api/products/list",
                    total: products.length
                },
                data:products
            }
            res.json(respuesta)
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
                    url:"api/products/:id"
                },
                data:product
            }
            res.json(respuesta)
        })
    }

}

module.exports = productsAPIController