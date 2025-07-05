const Router = require("router");

const {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

const userRouter = Router();
userRouter
  .post("/users", createUser)
  .get("/users", readUser)
  .put("/user/:id", updateUser)
  .delete("/user/:id", deleteUser);

module.exports = userRouter;
