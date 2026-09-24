const pool = require("../database/connection");

async function createTask(data) {
    const result = await pool.query(
        `INSERT INTO tasks(title, description)
        VALUES ($1, $2)
        RETURNING *
        `,
        [data.title, data.description]
    );

    return result.rows[0];
}

async function getTasks() {
    const result = await pool.query(
        "SELECT * FROM tasks ORDER BY id"
    );
    return result.rows;
}

async function getTaskById(id) {
    const result = await pool.query(
        "SELECT * FROM tasks WHERE id = $1",
        [id]
    );
    return result.rows[0];
}

async function updateTask(id, data) {
    const result = await pool.query(
        `
        UPDATE tasks
        SET title = $1, description = $2, completed = $3
        WHERE id = $4
        RETURNING *
        `,
        [data.title, data.description, data.completed, id]
    );
    return result.rows[0];
}

async function deleteTask(id) {
    const result = await pool.query(
        `
        DELETE FROM tasks
        WHERE id = $1
        RETURNING *
        `,
        [id]
    );
    return result.rows[0];
}

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
}