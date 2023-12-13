const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('itempedidos', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        cantidad: {
            type: DataTypes.DECIMAL,
            defaultValue: 0,
        },
        valorunitario: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        impuesto: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        preciocosto: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        anulado: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
 
    },{tableName: 'itempedidos'},
    { timestamps: true });

};
