const {Sequelize, Model} = require('sequelize');
require('dotenv').config();

//cargamos todos los modelos de las tablas de la BD
const ArticulosModel = require('./models/Articulos');
const CiudadesModel = require('./models/Ciudades');
const ClientesModel = require('./models/Clientes');
const ItemPedidosModel = require('./models/ItemPedidos');
const LineasModel = require('./models/Lineas');
const PedidosModel = require('./models/Pedidos');
const MarcasModel = require('./models/Marcas');

//traemos del archivo .env los datos de conexion a la BD
const {DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: "mysql",
    logging: false,

});

//inicializamos los modelos con sequelize
ArticulosModel(sequelize);
CiudadesModel(sequelize);
ClientesModel(sequelize);
ItemPedidosModel(sequelize);
LineasModel(sequelize);
PedidosModel(sequelize);
MarcasModel(sequelize);

const {articulos,
       ciudades,
       clientes,
       itempedidos,
       lineas,
       pedidos,
       marcas} = sequelize.models;

//establecemos las relaciones entre tablas
lineas.hasMany(articulos, {foreignKey: 'linea_id', sourceKey: 'id'});
articulos.belongsTo(lineas, {foreignKey: 'linea_id', targetKey: 'id'});
clientes.belongsTo(ciudades, {foreignKey: 'ciudad_id', targetKey: 'id'});
clientes.hasMany(pedidos, {foreignKey: 'cliente_id', sourceKey: 'id'});
pedidos.belongsTo(clientes, {foreignKey: 'cliente_id', targetKey: 'id'});
pedidos.hasMany(itempedidos, {foreignKey: 'pedido_id', sourceKey: 'id'});
itempedidos.belongsTo(pedidos, {foreignKey: 'pedido_id', targetKey: 'id'});
itempedidos.belongsTo(articulos, {foreignKey: 'articulo_id', targetKey: 'id'});
articulos.belongsTo(marcas, {foreignKey: 'marca_id', targetKey: 'id'});

//funcion de test de conexion a la BD
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Conexion Exitosa");
    } catch (error) {
        console.log("Error de conexion");
    }
 };
 
 testConnection();

 module.exports = {
    articulos,
    ciudades,
    clientes,
    lineas,
    pedidos,
    itempedidos,
    marcas,
    conex: sequelize
 };