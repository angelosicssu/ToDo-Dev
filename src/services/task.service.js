const taskRepository = require("../repositories/task.repository");

async function createTask(data) {
    return await taskRepository.createTask(data);
}

async function getTasks() {
    return await taskRepository.getTasks(); 
}

async function getTaskById(id) {
    return await taskRepository.getTaskById(id);
}

async function updateTask(id, data) {
    return await taskRepository.updateTask(id, data);
}

async function deleteTask(id) {
    return await taskRepository.deleteTask(id);
}

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};