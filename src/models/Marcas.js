const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('marcas', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
 
    },{tableName: 'marcas'},
    { timestamps: false });

};
