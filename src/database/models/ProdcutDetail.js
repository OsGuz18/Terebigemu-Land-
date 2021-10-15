module.exports = (sequelize,DataTypes) => {
    let alias = 'productdetail';
    let cols = {
        ProductDetail_ID:{
            type: DataTypes.BIGINT(200).UNSIGNED,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        Description:{
            type:DataTypes.TEXT,
            allowNull: false
        },
        Ranking:{
            type:DataTypes.STRING(11),
            allowNull:false

        },
        Weight:{
            type:DataTypes.DECIMAL(6,3),
            allowNull:false
        },
        Size:{
            type:DataTypes.STRING(45),
            allowNull:false
        },
        Stock:{
            type:DataTypes.BIGINT(200),
            allowNull:false
        },
        ImageDetail1:{
            type:DataTypes.STRING(200)
        },
        ImageDetail2:{
            type:DataTypes.STRING(200)
        },
        ImageDetail3:{
            type:DataTypes.STRING(200)
        },
        ImageDetail4:{
            type:DataTypes.STRING(200)
        }
    }

    let config = {
        timestamps:false,
        freezeTableName: true
    }

    const ProductDetail = sequelize.define(alias,cols,config);

    ProductDetail.associate = function(models){
        ProductDetail.hasMany(models.product,{
            as: "product",
            foreignKey:"ProductDetail_ID"
        })
    }

    return ProductDetail
};