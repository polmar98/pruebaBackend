const express = require("express");
const {addPedido, getPedidos, 
       getPedidoById, anulaPedido} = require('../controllers/PedidosControllers');
const server = express();

//devuelve todos los pedidos
server.get('/', async(req, res) => {
   const query1 = req.query;
   try {
       const result = await getPedidos(query1);
       res.status(200).json(result);
   } catch (error) {
       console.log(error.message); 
       res.status(500).json({message: error.message});     
   }
});

//devuelve un pedido por su id
server.get('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const result = await getPedidoById(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message); 
        res.status(500).json({message: error.message});     
    }
 });
 
 //anula un pedido por su id
server.put('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const result = await anulaPedido(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message); 
        res.status(500).json({message: error.message});     
    }
 });


//esta ruta permite agregar un nuevo pedido
server.post('/', async(req, res) => {
   const datos = req.body; 
   try {
       const result = await addPedido(datos);
       res.status(200).json(result);
   } catch (error) {
       console.log(error.message); 
       res.status(500).json({message: error.message});  
   }
});



module.exports = server;