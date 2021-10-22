
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { query } = require('express');




const Users = db.user 


const usersAPIController = {
    usersList:(req,res)=>{
        let totalpage
        let respuesta
        if(req.query.page){
            let offset
            
            if(req.query.page == 1){
                offset = 0
            }else{
                offset = (req.query.page * 10)-10
            }
            
            Users.findAll({
                include:{association: "usercategory"}
            })
            .then((usuariostot)=>{
                if(usuariostot.length%10 != 0){
                    totalpage= Math.trunc(usuariostot.length/10)+1
                }else{
                    totalpage= Math.trunc(usuariostot.length/10)
                }
                
                Users.findAll({
                    include:{association: "usercategory"},
                    limit:10,
                    offset:offset
                })
                .then((users)=>{
                    let pagina = (offset/10) + 1
                    if(pagina == 1){
                        respuesta = {
                            meta:{
                                status:200,
                                next_page: "api/users?page=2",
                                total_pages:totalpage
                            },
                            data: users
                        }
                    }else if(pagina == totalpage){
                        respuesta = {
                            meta:{
                                status:200,
                                previous_page: "api/users?page=" + (totalpage - 1),
                                total_pages:totalpage
                            },
                            data: users
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
                                next_page:"api/users?page=" + (pagina + 1),
                                previous_page: "api/users?page=" + (pagina - 1),
                                total_pages:totalpage
                            },
                            data: users
                        }
                    }
                    res.json(respuesta)
                })
            })
        }else{
            Users.findAll({include:{association: "usercategory"}})
            .then((users)=>{
                let respuesta = {
                    meta:{
                        status:200,
                        total: users.length,
                        url: "api/users"
                    },
                    data: users
                }
                res.json(respuesta)
            })
        }
    },

    userDetail:(req,res) =>{
        Users.findByPk(req.params.id,{
            include:{association: "usercategory"}
        })
        .then(user=>{
            let respuesta ={
                meta:{
                    status:200,
                    url:"api/users/:id"
                },
                data:user
            }
            res.json(respuesta)
        })
    }


}

module.exports = usersAPIController