const express = require("express");
const taskController = require("../controllers/task.controller");
const router = express.Router();

router.get("/tasks", taskController.getTasks);
router.post("/tasks", taskController.createTask);
router.get("/tasks/:id", taskController.getTaskById);
router.put("/tasks/:id", taskController.updateTask);
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;