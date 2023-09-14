const { Login, Signup } = require("../Controllers/AuthController");
const {userVerification} =require("../Middlewares/AuthMiddleWare")
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.post('/', userVerification)

module.exports = router;