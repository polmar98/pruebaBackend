const express = require("express");
const {getAll, addLinea, updateLinea, getLineaById} = require('../controllers/LineasControllers');

const server = express();

//esta ruta devuelve todas las lineas creadas
server.get('/', async(req, res) => {
    try {
       const result = await getAll();
       res.status(200).json(result); 
    } catch (error) {
       console.log(error.message); 
       res.status(500).json({message: error.message}); 
    }
});

//esta ruta devuelve la linea definida por ID
server.get('/:id', async(req, res) => {
    const {id} = req.params;
    try {
       const result = await getLineaById(id);
       res.status(200).json(result); 
    } catch (error) {
       console.log(error.message); 
       res.status(500).json({message: error.message}); 
    }
});


//esta ruta agrega una linea nueva
server.post('/', async(req, res) => {
   const datos = req.body; 
   try {
       const result = await addLinea(datos);
       res.status(200).json(result);
   } catch (error) {
       console.log(error.message); 
       res.status(500).json({message: error.message});     
   }
});

//modifica linea
server.put('/:id', async(req, res) => {
    const datos = req.body;
    const {id} = req.params;
    try {
        const result = await updateLinea(datos, id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: error.message});        
    }
 });
 

module.exports = server;