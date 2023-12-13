const {Router} = require('express');
const router = Router();

const LineasRoutes = require('../handlers/LineasHandlers');
const ArticulosRoutes = require('../handlers/ArticulosHandlers');
const ClientesRoutes = require('../handlers/ClientesHandlers');
const PedidosRoutes = require('../handlers/PedidosHandlers');

router.use('/lineas', LineasRoutes);
router.use('/articulos', ArticulosRoutes);
router.use('/clientes', ClientesRoutes);
router.use('/pedidos', PedidosRoutes);

module.exports = router;