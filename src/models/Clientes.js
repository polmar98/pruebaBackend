const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('clientes', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        documento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: true,
        },  
        celular: {
            type: DataTypes.STRING,
            allowNull: true,
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },    
 
    },{tableName: 'clientes'},
    { timestamps: true });

};
