const { Router } = require("express");
const router = new Router();
const { getUser, getUserId, } = require("../controllers/users.controllers");
const {
    getClient,
    createClient,
    updateClient,
    deleteClient,
    getClientId,
} = require("../controllers/clients.controllers");
const { updateBuses, createBuses, deleteBuses, getBuses } = require("../controllers/bus.controllers");
const { getDestinos, deleteDestinos, createDestinos, updateDestinos, getDestinosId, getDestinosIds } = require("../controllers/destinos.controllers");
const { createViaje, getViajeController, SeguimientoViajeController, setSeguimientoViajeController, getUsuarioViajeController, createViajeDetalle, eliminarViajeDetalle, getViajesController, getViajeidviajeController } = require("../controllers/viaje.controllers");
const { pmamcontroller } = require("../controllers/pmam.controller");


//User
router.post('/login', getUser);
router.post('/getuserid', getUserId);
//Api cliente

router.get('/getclients', getClient);
router.post('/getclientid', getClientId);
router.post('/deleteClient', deleteClient);
router.post('/createClient', createClient);
router.post('/updateClient', updateClient);




//Api Buses
router.get('/getBuses', getBuses);
router.post('/deleteBuses', deleteBuses);
router.post('/createBuses', createBuses);
router.post('/updateBuses', updateBuses);

//Api Destinos
router.get('/getDestinos', getDestinos);
router.post('/getDestinosid', getDestinosId);
router.post('/getDestinosids', getDestinosIds);
router.post('/deleteDestinos', deleteDestinos);
router.post('/createDestinos', createDestinos);
router.post('/updateDestinos', updateDestinos);

//Api Viajes

router.post('/selectViaje', getViajeController);
router.post('/selectViajeid', getViajeidviajeController);
router.post('/selectViajes', getViajesController);
router.post('/createSeguimiento', setSeguimientoViajeController);
router.post('/createDetalle', createViajeDetalle);
router.post('/deleteDetalle', eliminarViajeDetalle);


router.post('/createViaje', createViaje);
router.post('/usuariosViaje', getUsuarioViajeController);



router.get('/pmam', pmamcontroller);
// router.post('/createNewUser', (req, res) => {
//     const token = generateAccessToken({ username: req.body.username });
//     res.json({
//         "token": token
//       });

//   });
// function generateAccessToken(username) {
//     return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
// }
// router.get('/userOrders', authenticateToken, (req, res) => {
//     const valores={"id":111111,"Valor":2344}
//     res.json(valores);
//   });


module.exports = router;