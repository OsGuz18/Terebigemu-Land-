module.exports = (sequelize,DataTypes) => {
    let alias = 'user';
    let cols = {
        User_ID:{
            type: DataTypes.BIGINT(200).UNSIGNED,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        FirstName:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        LastName:{
            type: DataTypes.STRING(100),
            allowNull:false
        },
        Address:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        Telephone:{
            type: DataTypes.STRING(20),
            allowNull:false
        },
        Email:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        Photo:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        Password:{
            type:DataTypes.STRING(500),
            allowNull:false
        },
        UserCategory_ID:{
            type: DataTypes.BIGINT(200),
            allowNull:false
        },
        Age:{
            type: DataTypes.STRING(3),
            allowNull:false
        },
        Gender:{
            type: DataTypes.STRING(2),
            allowNull:false
        }
    }

    let config = {
        timestamps:false,
        freezeTableName: true
    }

    const User = sequelize.define(alias,cols,config);

    User.associate = function(models){
        User.hasMany(models.orders,{
            as: "orders",
            foreignKey:"User_ID"
        }),

        User.belongsTo(models.usercategory,{
            as: "usercategory",
            foreignKey:"UserCategory_ID"
        })
    }

    return User
};