module.exports = (sequelize,DataTypes) => {
    let alias = 'usercategory';
    let cols = {
        UserCategory_ID:{
            type: DataTypes.BIGINT(200).UNSIGNED,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        CategoryType:{
            type:DataTypes.STRING(45),
            allowNull: false
        },
        Description:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        Points:{
            type:DataTypes.BIGINT(200),
            allowNull:false
        }
    }

    let config = {
        timestamps:false,
        freezeTableName: true
    }

    const UserCategory = sequelize.define(alias,cols,config);

    UserCategory.associate = function(models){
        UserCategory.hasMany(models.user,{
            as: "user",
            foreignKey:"UserCategory_ID"
        })
    }

    return UserCategory
};