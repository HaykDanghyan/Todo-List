import TodoRouter from "./routers/todo.router.js";

const router = (app) => {
    app.use("/api/todos", TodoRouter);
}

export default router;