const { Router } = require("express");
const router = new Router();
const { body, validationResult } = require('express-validator');


const { signIn, welcome, refresh } = require("../handlers/handler");
const { getUsersCon,
    getUserById,
    createUser,
    updateUser,
    deleteUser } = require("../controllers/users.controllers");


router.post('/signin', signIn);
router.get('/welcome', welcome);
router.get('/refresh', refresh);


//Api viahes
//router.get('/', getUsersCon);
router.get('/:id', getUserById);
router.post('/cusers', body('email').isEmail(), body('password').isLength({ min: 5 }), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ data: "1" });
    }
    createUser(req, res)
});
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);





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