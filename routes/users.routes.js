const { Router } = require("express");
const router = new Router();
const { getUsersCon,
    getUserById,
    createUser,
    updateUser,
    deleteUser } = require("../controllers/users.controllers");


//Api viahes
router.get('/', getUsersCon);
router.get('/:id', getUserById);
router.post('/cusers',
     /* body('email').isEmail(),
     body('pass').isLength({ min: 5 }),
     createUser) */);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;