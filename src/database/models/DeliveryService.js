module.exports = (sequelize,DataTypes) => {
    let alias = 'deliveryservice';
    let cols = {
        DeliveryService_ID:{
            type: DataTypes.BIGINT(200).UNSIGNED,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        DeliveryType_ID:{
            type:DataTypes.BIGINT(200),
            allowNull: false
        },
        DeliveryCompany:{
            type: DataTypes.STRING(45),
            allowNull:false
        },
        Telephone:{
            type:DataTypes.BIGINT(11),
            allowNull:false
        },
        Email:{
            type: DataTypes.STRING(45),
            allowNull:false
        },
        HomePage:{
            type:DataTypes.STRING(45),
            allowNull:false
        }
    }

    let config = {
        timestamps:false,
        freezeTableName: true
    }

    const DeliveryService = sequelize.define(alias,cols,config);

    DeliveryService.associate = function(models){
        DeliveryService.hasMany(models.orders,{
            as: "orders",
            foreignKey:"User_ID"
        }),

        DeliveryService.belongsTo(models.deliverytype,{
            as: "deliverytype",
            foreignKey:"DeliveryType_ID"
        })
    }

    return DeliveryService
};