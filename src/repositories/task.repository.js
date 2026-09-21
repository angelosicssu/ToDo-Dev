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

module.exports = {
    createTask
}