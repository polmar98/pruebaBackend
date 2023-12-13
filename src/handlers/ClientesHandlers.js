const express = require("express");
const {getAll, getClienteById, addCliente, updateCliente} = require('../controllers/ClientesControllers');
const server = express();

//esta ruta devuelve todas los clientes creados
server.get('/', async(req, res) => {
    try {
       const result = await getAll();
       res.status(200).json(result); 
    } catch (error) {
       console.log(error.message); 
       res.status(500).json({message: error.message}); 
    }
});

//esta ruta devuelve el cliente definido por ID
server.get('/:id', async(req, res) => {
    const {id} = req.params;
    try {
       const result = await getClienteById(id);
       res.status(200).json(result); 
    } catch (error) {
       console.log(error.message); 
       res.status(500).json({message: error.message}); 
    }
});

//esta ruta agrega clientes nuevos
server.post('/', async(req, res) => {
    const datos = req.body;
    try {
        const result = await addCliente(datos);
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message); 
        res.status(500).json({message: error.message});         
    }
});

//esta ruta modifica un cliente
server.put('/:id', async(req, res) => {
   const {id} = req. params;
   const datos = req.body; 
   try {
       const result = await updateCliente(datos, id);
       res.status(200).json(result);
   } catch (error) {
       console.log(error.message); 
       res.status(500).json({message: error.message});      
   }
});

module.exports = server;