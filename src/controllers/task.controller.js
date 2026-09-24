const taskService = require("../services/task.service");

async function getTasks(request, response) {
    const tasks = await taskService.getTasks();
    response.json(tasks);
}

async function createTask(request, response) {
    const data = request.body;
    const task = await taskService.createTask(data);
    response.status(201).json({
        message: "Tarefa adicionada com sucesso!",
        task: task
    });
}

async function getTaskById(request, response) {
    const id = Number(request.params.id);
    const task = await taskService.getTaskById(id);
    if(!task) {
        return response.status(404).json({
            message: "Tarefa não encontrada"
        });
    }
    response.json(task);
}

async function updateTask(request, response) {
    const id = Number(request.params.id);
    const data = request.body;
    const task = await taskService.updateTask(id, data);
    if(!task) {
        return response.status(404).json({
            message: "Tarefa não encontrada"
        });
    }
    response.json({
        message: "Tarefa alterada com sucesso",
        task: task
    });
}

async function deleteTask(request, response) {
    const id = Number(request.params.id);
    const task = await taskService.deleteTask(id);
    if(!task) {
        return response.status(404).json({
            message: "Tarefa não encontrada"
        });
    }
    response.json({
        message: "Tarefa deletada com sucesso",
    });
}

module.exports = {
    getTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
};