const { pedidos, itempedidos, clientes, conex, articulos } = require('../dbconex');

//devuelve consecutivo
const devuelveNumero = async() =>{
    const array = await pedidos.findAll();
   
    var num = '0000000000';
    if(array.length>0) {
        array.forEach(ele => {
            num = ele.numero;
         });
    };
    let n = Number(num)+1;
    num = n.toString().padStart(10,'0');
    return num;
}; 


//graba un nuevo pedido
const addPedido = async(datos) => {
   const {fecha, solicita, cliente_id, valor, items} = datos;
   const num = await devuelveNumero();

   const newPed = {
      numero: num,
      fecha,
      solicita,
      valor,
      cliente_id,
   };
   const pedido = await pedidos.create(newPed);
   //procedemos a grabar los items del pedido
   items.forEach(async(ele) => {
      const newItem = {
         cantidad: ele.cantidad,
         valorunitario: ele.valorunitario,
         impuesto: ele.impuesto,
         preciocosto: ele.preciocosto,
         articulo_id: ele.articulo_id,
         pedido_id: pedido.id
      };
      await itempedidos.create(newItem);
   });
   return pedido;
};

//devuelve un array con los pedidos existentes
const getPedidos = async(query1) => {
   if(!query1){
       const array = await pedidos.findAll(
           {include: [
               {model: clientes, attributes: { exclude: ['createdAt','updatedAt']}}
           ]
        });
        return array;
   } else {
       const array = await pedidos.findAll({where: query1},
           {include: [
               {model: clientes, attributes: { exclude: ['createdAt','updatedAt']}}
           ]
        });
        return array;
   }; 
};

//devuelve un pedido por su id
const getPedidoById = async(id) => {
   const pedido = await pedidos.findByPk(id,
   {include: [
      {model: clientes, attributes: { exclude: ['createdAt','updatedAt']}},
      {model: itempedidos, attributes: { exclude: ['createdAt','updatedAt']},
           include: [{model: articulos, attributes: ['name', 'referencia']}]
      }
   ]
   });
   return pedido;
};

//anular un pedido
const anulaPedido = async(id) => {
   const idreg = Number(id);
   await pedidos.update({anulado: 1}, {where: {id: idreg}});
   await itempedidos.update({anulado: 1}, {where: {pedido_id: idreg}});
   return {message: "Pedido anulado"};
};
 
module.exports = {addPedido, getPedidos, getPedidoById, anulaPedido};