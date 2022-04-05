const { Router } = require("express");
const router = new Router();
const {getUser, } = require("../controllers/users.controllers");
    const { getClient,
        createClient,
        updateClient,
        deleteClient,} = require("../controllers/clients.controllers");

        
//Api cliente
router.post('/login', getUser);
router.get('/getclients', getClient);
router.post('/deleteClient', deleteClient);
router.post('/createClient', createClient);
router.post('/updateClient', updateClient);




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