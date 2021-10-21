const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");




const Categories = db.productcategory 


const categoryAPIController = {
    all:(req,res)=>{
        Categories.findAll()
        .then((categories)=>{
            let respuesta = {
                meta:{
                    status:200,
                    total: categories.length,
                    url: "api/category"
                },
                data: categories
            }
            res.json(respuesta)
        })
    }

}

module.exports = categoryAPIController