const Router = require("router");

const createProduct = require("../controllers/productControllers");

const productRouter = Router();
productRouter.post("/users", createProduct);
module.exports = productRouter;
