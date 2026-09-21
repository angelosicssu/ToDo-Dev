const pool = require("./connection");

async function testConnection() {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("Conectado ao PostgreSQL");
        console.log(result.rows);
    } catch (err) {
        console.log("Deu erro: ", err);
    } finally {
        await pool.end();
    }
}

testConnection();