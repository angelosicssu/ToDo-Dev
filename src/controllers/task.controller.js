const taskService = require("../services/task.service");

function getTasks(request, response) {
    const tasks = taskService.getTasks();
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

function getTaskById(request, response) {
    const id = Number(request.params.id);
    const task = taskService.getTaskById(id);
    if(!task) {
        return response.status(404).json({
            message: "Tarefa não encontrada"
        });
    }
    response.json(task);
}

function updateTask(request, response) {
    const id = Number(request.params.id);
    const data = request.body;
    const task = taskService.updateTask(id, data);
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

function deleteTask(request, response) {
    const id = Number(request.params.id);
    const task = taskService.deleteTask(id);
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