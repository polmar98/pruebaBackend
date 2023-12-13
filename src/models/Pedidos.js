const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('pedidos', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        numero: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        solicita: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        anulado: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        despachado: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }, 
        fechadespacho: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        valor: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        }       
 
    },{tableName: 'pedidos'},
    { timestamps: true });

};
