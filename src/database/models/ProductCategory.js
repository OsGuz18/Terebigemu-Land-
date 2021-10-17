module.exports = (sequelize,DataTypes) => {
    let alias = 'productcategory';
    let cols = {
        ProductCategory_ID:{
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
            type:DataTypes.TEXT,
            allowNull:false

        },
        Image:{
            type:DataTypes.STRING(200),
            allowNull:false
        }
    }

    let config = {
        timestamps:false,
        freezeTableName: true
    }

    const ProductCategory = sequelize.define(alias,cols,config);

    ProductCategory.associate = function(models){
        ProductCategory.hasMany(models.product,{
            as: "product",
            foreignKey:"ProductCategory_ID"
        })
    }

    return ProductCategory
};