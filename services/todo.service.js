import { messages } from "../config/constants.config.js";
import Todo from "../models/todo.model.js";

const getTodos = async () => {
    const result = await Todo.find();
    if (result.length === 0) {
        throw messages.noTodos;
    }
    return result;
};

const getTodoById = async (payload) => {
    const result = await Todo.findById(payload);
    if (result === null) {
        throw messages.todoNotFound;
    }
    return result;
}

const addTodo = async (payload) => {
    try {
        const newTodo = new Todo({...payload});
        await newTodo.save();
        return messages.todoCreatedSuccessfully;
    } catch (err) {
        throw messages.failedToCreate;
    }
}

const updateTodo = async (payload, id) => {
    Todo.findByIdAndUpdate(id)
    .then(todo => {
        todo.title = payload.title;
        todo.done = payload.done;
        todo.save();
    }).catch(err => {
        throw messages.failedToUpdate;
    })
    return messages.updatedSuccessfully;
}

const deleteTodo = async (id) => {
    try {
        await Todo.findByIdAndDelete(id);
        return messages.todoDeletedSuccessfully;
    } catch (err) {
        throw messages.failedToDelete;
    }
}

const TodoSerivce = {
    getTodos,
    getTodoById,
    addTodo,
    updateTodo,
    deleteTodo
};

export default TodoSerivce;