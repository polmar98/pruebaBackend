const { articulos, lineas, marcas } = require('../dbconex');

//devuelve todos los articulos 
const getAll = async() => {
   const array = await articulos.findAll({
    include:[
        {model: lineas, attributes: { exclude: ['createdAt','updatedAt']}},
        {model: marcas, attributes: { exclude: ['createdAt','updatedAt']}}
    ]
   });
   return array;
};

//devuelve todos los articulos de una linea
const getArticulosxLinea = async(id) => {
    const idLin = Number(id);
    const array = await articulos.findAll(
     {where: {linea_id: idLin}},
     {include:[
         {model: lineas, attributes: { exclude: ['createdAt','updatedAt']}},
         {model: marcas, attributes: { exclude: ['createdAt','updatedAt']}}
     ]
    });
    return array;
};

//devuelve un articulo por su ID
const getArticuloById = async(id) => {
   const registro = await articulos.findByPk(id,
    {include:[
        {model: lineas, attributes: { exclude: ['createdAt','updatedAt']}},
        {model: marcas, attributes: { exclude: ['createdAt','updatedAt']}}
    ]    
    });
    return registro;
};

//agregar un articulo nuevo
const addArticulo = async(datos) => {
   const {name, referencia, codbarra, preciocosto, precioventa, linea_id, marca_id, presentacion} = datos;
   if(!name || !referencia || !presentacion || !linea_id || !marca_id) {
      throw Error("Datos basicos incompletos");
   };
   const grabado = await articulos.create(datos);
   return grabado;
};

//actualizar un articulo
const updateArticulo = async(datos, id) => {
    const idReg = Number(id);
    const {name, referencia, codbarra, preciocosto, precioventa, linea_id, marca_id, presentacion} = datos;
    const result = await articulos.update(datos, {where: {id: idReg}})
    return result;
};

module.exports = {getAll, getArticulosxLinea, getArticuloById, addArticulo, updateArticulo};