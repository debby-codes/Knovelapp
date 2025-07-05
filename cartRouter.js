const Router = require("router");

const authenticateToken = require("../controllers/cartControllers");

const cartRouter = Router();
cartRouter.post("/cart", authenticateToken);
module.exports = cartRouter;
