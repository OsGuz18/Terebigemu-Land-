module.exports = (sequelize,DataTypes) => {
    let alias = 'product';
    let cols = {
        Product_ID: {
            type: DataTypes.BIGINT(200).UNSIGNED,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true

        },
        ProductDetail_ID:{
            type: DataTypes.BIGINT(200),
            allowNull:false
        },
        ProductCategory_ID:{
            type: DataTypes.BIGINT(200),
            allowNull:false
        },
        Brand_ID:{
            type: DataTypes.BIGINT(200),
            allowNull:false
        },
        ProductName:{
            type: DataTypes.STRING(45),
            allowNull:false
        },
        Price:{
            type: DataTypes.DECIMAL(6,2),
            allowNull:false
        },
        Disccount:{
            type: DataTypes.DECIMAL(3,0),
            allowNull:false
        },
        Image:{
            type: DataTypes.STRING(100),
            allowNull:false
        }

    }

    let config = {
        timestamps:false,
        freezeTableName: true
    }

    const Product = sequelize.define(alias,cols,config);

    Product.associate = function(models){
        Product.belongsTo(models.brand,{
            as: "brand",
            foreignKey:"Brand_ID"
        })

        Product.belongsTo(models.productcategory,{
            as: "productcategory",
            foreignKey:"ProductCategory_ID"
        })

        Product.belongsTo(models.productdetail,{
            as: "productdetail",
            foreignKey:"ProductDetail_ID"
        })

        Product.belongsToMany(models.orders, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "orders",
            through: 'orderprodcut',
            foreignKey: 'Product_ID',
            otherKey: 'Order_ID',
            timestamps: false,
            onDelete: 'cascade'
        })
    }

    return Product
};