module.exports = (sequelize,DataTypes) => {
    let alias = 'orderproduct';
    let cols = {
        OrderProduct_ID:{
            type: DataTypes.BIGINT(200).UNSIGNED,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        Order_ID:{
            type: DataTypes.BIGINT(200),
            allowNull:false
        },
        Product_ID:{
            type: DataTypes.BIGINT(200),
            allowNull:false
        }
    }

    let config = {
        timestamps: false,
        deletedAt: false,
        freezeTableName: true
    }

    const OrderProduct = sequelize.define(alias,cols,config);

    return OrderProduct
}