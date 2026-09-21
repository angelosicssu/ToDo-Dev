const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "devtask",
    password: "devtask123",
    database: "devtask"
});

module.exports = pool;