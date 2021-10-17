module.exports = (sequelize,DataTypes) => {
    let alias = 'brand';
    let cols = {
        Brand_ID: {
            type: DataTypes.BIGINT(200).UNSIGNED,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true

        },
        CompanyName:{
            type: DataTypes.STRING(45),
            allowNull:false
        },
        CompanyContact:{
            type: DataTypes.STRING(45),
            allowNull:false
        },
        ContactAddress:{
            type: DataTypes.STRING(45),
            allowNull:false
        },
        ContactPhone:{
            type: DataTypes.STRING(45),
            allowNull:false
        },
        Email:{
            type: DataTypes.STRING(45),
            allowNull:false
        },
        HomePage:{
            type: DataTypes.STRING(45),
            allowNull:false
        }

    }

    let config = {
        timestamps:false,
        freezeTableName: true
    }

    const Brand = sequelize.define(alias,cols,config);

    Brand.associate = function(models){
        Brand.hasMany(models.product,{
            as: "product",
            foreignKey: "Brand_ID"
        })
    }

    return Brand
};