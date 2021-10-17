module.exports = (sequelize,DataTypes) => {
    let alias = 'deliverytype';
    let cols = {
        DeliveryType_ID:{
            type: DataTypes.BIGINT(200).UNSIGNED,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        Type:{
            type:DataTypes.STRING(45),
            allowNull: false
        },
        Description:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        Days:{
            type:DataTypes.BIGINT(11),
            allowNull:false
        },
        Cost:{
            type:DataTypes.DECIMAL(16,2),
            allowNull:false
        }
    }

    let config = {
        timestamps:false,
        freezeTableName: true
    }

    const DeliveryType = sequelize.define(alias,cols,config);

    DeliveryType.associate = function(models){
        DeliveryType.hasMany(models.deliveryservice,{
            as: "deliveryservice",
            foreignKey:"DeliveryType_ID"
        })
    }

    return DeliveryType
};