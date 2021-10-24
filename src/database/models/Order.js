module.exports = (sequelize,DataTypes) => {
    let alias = 'orders';
    let cols = {
        Order_ID: {
            type: DataTypes.BIGINT(200).UNSIGNED,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true

        },
        User_ID:{
            type: DataTypes.BIGINT(200),
            allowNull:false
        },
        DeliveryService_ID:{
            type: DataTypes.BIGINT(200),
            allowNull:true
        },
        OrderStatus:{
            type: DataTypes.STRING(45),
            allowNull:false
        },
        Price:{
            type: DataTypes.DECIMAL(6,2),
            allowNull:true
        },
        Disccount:{
            type: DataTypes.DECIMAL(3,0),
            allowNull:true
        },
        Quantity:{
            type: DataTypes.BIGINT(11),
            allowNull:true
        },
        Taxes:{
            type: DataTypes.DECIMAL(6,2),
            allowNull:true
        },
        Total:{
            type: DataTypes.DECIMAL(6,2),
            allowNull:true
        },
        Fecha_pedido:{
            type: DataTypes.DATE,
            allowNull:true
        }


    }

    let config = {
        timestamps: false,
        deletedAt: false
    }

    const Order = sequelize.define(alias,cols,config);

    Order.associate = function(models){
        Order.belongsTo(models.user,{
            as: "user",
            foreignKey:"User_ID"
        })

        Order.belongsTo(models.deliveryservice,{
            as: "deliveryservice",
            foreignKey:"DeliveryService_ID"
        })

        Order.belongsToMany(models.product, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "product",
            through: 'orderproduct',
            foreignKey: 'Order_ID',
            otherKey: 'Product_ID',
            timestamps: false,
            onDelete: 'cascade'
        })

    }

    return Order
};