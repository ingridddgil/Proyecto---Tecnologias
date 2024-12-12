import Router from "express";
import { getAllTasks, createTask, deleteTask, getTask, updateTask } from "../controllers/tasks.controller.js";
 
const router = Router();

router.get("/alltasks", getAllTasks)

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;