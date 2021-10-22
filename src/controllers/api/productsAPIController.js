const path = require('path')
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const Products = db.product

productsAPIController={
    productsList:(req,res) =>{
        let totalpage
        let respuesta

        if(req.query.page){
            let offset
            
            if(req.query.page == 1){
                offset = 0
            }else{
                offset = (req.query.page * 10)-10
            }

            Products.findAll({
                include:["brand","productdetail","productcategory"]
            })
            .then((productostotal)=>{
                if(productostotal.length%10 != 0){
                    totalpage= Math.trunc(productostotal.length/10)+1
                }else{
                    totalpage= Math.trunc(productostotal.length/10)
                }
                
                Products.findAll({
                    include:["brand","productdetail","productcategory"],
                    limit:10,
                    offset:offset
                })
                .then((products)=>{
                    let pagina = (offset/10) + 1
                    if(pagina == 1){
                        respuesta = {
                           meta:{
                               status:200,
                               next_page: "api/products?page=2",
                               total_pages:totalpage
                           },
                           data: products
                       }
                   }else if(pagina == totalpage){
                    respuesta = {
                       meta:{
                           status:200,
                           previous_page: "api/products?page=" + (totalpage - 1),
                           total_pages:totalpage
                       },
                       data: products
                   }
                    }else if(req.query.page > totalpage){
                        respuesta ={
                            meta:{
                                Message: "This page has no data"
                            }
                        }
    
                    }else{
                        respuesta = {
                            meta:{
                                status:200,
                                next_page:"api/products?page=" + (pagina + 1),
                                previous_page: "api/products?page=" + (pagina - 1),
                                total_pages:totalpage
                            },
                            data: users
                        }
                    }
                    res.json(respuesta)
                })
            })
        }else{
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
        }
        
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