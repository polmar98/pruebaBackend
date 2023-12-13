const express = require("express");
const {getAll, getArticuloById,
       getArticulosxLinea, addArticulo, updateArticulo} = require('../controllers/ArticulosControllers');
const server = express();

//devuelve todos los articulos
server.get('/', async(req, res) => {
    try {
        const result = await getAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message); 
        res.status(500).json({message: error.message});           
    }
});

//devuelve articulo seleccionado por el Id
server.get('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const result = await getArticuloById(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message); 
        res.status(500).json({message: error.message});           
    }
});

//devuelve todos lso articulos de la linea seleccionada por el ID
server.get('/linea/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const result = await getArticulosxLinea(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message); 
        res.status(500).json({message: error.message});           
    }
});

//agrega un articulo nuevo
server.post('/', async(req, res) => {
    const datos = req.body;
   try {
       const result = await addArticulo(datos);
       res.status(200).json(result);
   } catch (error) {
       console.log(error.message); 
       res.status(500).json({message: error.message});       
   }
});

//actualiza un articulo
server.put('/:id', async(req, res) => {
   const datos = req.body;
   const {id} = req.params;
   try {
       const result = await updateArticulo(datos, id);
       res.status(200).json(result);
   } catch (error) {
       console.log(error.message); 
       res.status(500).json({message: error.message});        
   }
});

module.exports = server;