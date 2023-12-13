const { clientes, ciudades } = require('../dbconex');

//devuelve todos los clientes
const getAll = async() => {
    const array = await clientes.findAll({
     include:[
         {model: ciudades, attributes: { exclude: ['createdAt','updatedAt']}}
     ]
    });
    return array;
 };

 //devuelve cliente seleccionado por el ID
 const getClienteById = async(id) => {
    const idreg = Number(id);
    const array = await clientes.findByPk(id,
     {include:[
         {model: ciudades, attributes: { exclude: ['createdAt','updatedAt']}}
     ]
    });
    return array;
 };


 //agrega un nuevo cliente
 const addCliente = async(datos) => {
    const {name, documento, direccion, telefono, celular, email, ciudad_id} = datos;
    if(!name || !documento || !ciudad_id) {
        throw Error("Datos incompletos");
    };
    const grabado = await clientes.create(datos);
    return grabado;
 };

//actualiza datos del cliente
const updateCliente = async(datos, id) => {
    console.log("info",datos);
    const idReg = Number(id);
    const {name, documento, direccion, telefono, celular, email, ciudad_id} = datos;
    if(!name || !documento || !ciudad_id) {
        throw Error("Datos incompletos");
    };    
    const result = await clientes.update(datos, {where: {id: idReg}});
    return result;   
};

 module.exports = {
    getAll, getClienteById, addCliente, updateCliente
 };