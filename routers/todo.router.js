import express from "express"
import TodoController from "../controllers/todo.controller.js";

const TodoRouter = express.Router();

TodoRouter.get("/get", TodoController.getTodos)
TodoRouter.get("/get/:id", TodoController.getTodoById);
TodoRouter.post("/add", TodoController.addTodo);
TodoRouter.put("/update/:id", TodoController.updateTodo);
TodoRouter.delete("/delete/:id", TodoController.deleteTodo);

export default TodoRouter;