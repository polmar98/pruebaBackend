const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('articulos', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        referencia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        presentacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        codbarra: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        active: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        preciocosto: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 0,
        },
        precioventa: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 0,
        },
        impuesto: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 0,
        },
 
    },{tableName: 'articulos'},
    { timestamps: true });

};