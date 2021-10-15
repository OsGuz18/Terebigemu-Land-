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
            allowNull:false
        },
        PaymentMethod:{
            type: DataTypes.STRING(45),
            allowNull:false
        },
        OrderStatus:{
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
        Quantity:{
            type: DataTypes.BIGINT(11),
            allowNull:false
        },
        Taxes:{
            type: DataTypes.DECIMAL(6,2),
            allowNull:false
        },
        Total:{
            type: DataTypes.DECIMAL(6,2),
            allowNull:false
        },


    }

    let config = {
        timestamps: true,
        createdAt: 'OrderDate',
        updatedAt: 'UPDATED_AT',
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
            through: 'orderprodcut',
            foreignKey: 'Order_ID',
            otherKey: 'Product_ID',
            timestamps: false,
            onDelete: 'cascade'
        })

    }

    return Order
};