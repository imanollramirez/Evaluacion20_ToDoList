import express from "express";
import tasksController from "../controllers/tasksController.js";

const router = express.Router();

router.route("/")
    .get(tasksController.getTasks)
    .post(tasksController.insertTasks)
    router.route("/:id")
    .get(tasksController.getTasksById)
    .put(tasksController.updateTasks)
    .delete(tasksController.deleteTask);

export default router;