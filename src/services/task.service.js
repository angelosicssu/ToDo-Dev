const taskRepository = require("../repositories/task.repository");

async function createTask(data) {
    return await taskRepository.createTask(data);
}

function getTasks() {
    return tasks;
}

function getTaskById(id) {
    const task = tasks.find(task => task.id === id);
    return task;
}

function updateTask(id, data) {
    const taskExist = tasks.findIndex(task => task.id === id);
    if(taskExist === -1) {
        return null;
    }
    const task = {
        id: id,
        ...data
    }
    tasks[taskExist] = task;
    return task;
}

function deleteTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if(taskIndex === -1) {
        return null;
    }
    const task = tasks[taskIndex];
    tasks.splice(taskIndex, 1);
    return task;
}

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};