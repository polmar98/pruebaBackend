const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('lineas', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        active: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
 
    },{tableName: 'lineas'},
    { timestamps: true });

};
