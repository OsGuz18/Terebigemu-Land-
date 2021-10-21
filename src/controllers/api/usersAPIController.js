
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");




const Users = db.user 


const usersAPIController = {
    usersList:(req,res)=>{
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