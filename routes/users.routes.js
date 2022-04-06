const { Router } = require("express");
const router = new Router();
const {getUser, } = require("../controllers/users.controllers");
    const { getClient,
        createClient,
        updateClient,
        deleteClient,
        getClientId,} = require("../controllers/clients.controllers");
const { updateBuses, createBuses, deleteBuses, getBuses } = require("../controllers/bus.controllers");
const { getDestinos, deleteDestinos, createDestinos, updateDestinos, getDestinosId } = require("../controllers/destinos.controllers");

        
//Api cliente
router.post('/login', getUser);
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
router.post('/deleteDestinos', deleteDestinos);
router.post('/createDestinos', createDestinos);
router.post('/updateDestinos', updateDestinos);



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