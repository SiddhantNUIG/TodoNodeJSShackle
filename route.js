import { Router } from "express";
import { getTodo, createTodo, updateTodo } from "./TodoService";

const testRouter = Router();

testRouter.get("/get", async (req, res) => {
    const data = await getTodo()
    res.send(data);
})

testRouter.post("/create", async (req, res) => {
    const data = await createTodo(req.body)
    res.send(data);
})

testRouter.post("/update", async (req, res) => {
    const data = await updateTodo(req.body.id)
    res.send(data);
})

export default testRouter;
