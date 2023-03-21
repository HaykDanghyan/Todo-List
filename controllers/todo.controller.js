import TodoSerivce from "../services/todo.service.js";
import { statusCodes } from "../config/constants.config.js";

const getTodos = async (req, res) => {
    try {
        const result = await TodoSerivce.getTodos();
        res.status(statusCodes.accepted).json(result);
    } catch (err) {
        res.status(statusCodes.badRequest).json(err);
    }
}

const getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await TodoSerivce.getTodoById(id);
        res.status(statusCodes.accepted).json(result);
    } catch (err) {
        res.status(statusCodes.badRequest).json(err);
    }
}   

const addTodo = async (req, res) => {
    try {
        const result = await TodoSerivce.addTodo(req.body);
        res.status(statusCodes.created).json(result);
    } catch (err) {
        res.status(statusCodes.unprocessableEntity).json(err);
    }
}

const updateTodo = async (req, res) => {
    try {
        const result = await TodoSerivce.updateTodo(req.body, req.params.id);
        res.status(statusCodes.accepted).json(result);
    } catch (err) {
        res.status(statusCodes.badRequest).json(err);
    }
}

const deleteTodo = async (req, res) => {
    try {
        const result = await TodoSerivce.deleteTodo(req.params.id);
        res.status(statusCodes.ok).json(result);
    } catch (err) {
        res.status(statusCodes.badRequest).json(err);
    }
}

const TodoController = {
    getTodos,
    getTodoById,
    addTodo,
    updateTodo,
    deleteTodo
};

export default TodoController;