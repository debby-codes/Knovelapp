const Router = require("router");

const logingIn  = require("../controllers/authControllers");

const authRouter = Router();

authRouter.post("/users/login", logingIn);

module.exports = authRouter;
