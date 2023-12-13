const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('ciudades', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
 
    },{tableName: 'ciudades'},
    { timestamps: false });

};
