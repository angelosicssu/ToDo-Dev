const express = require("express");
const taskRoutes = require("./routes/task.routes");
const app = express();
app.use(express.json());
app.use(taskRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando");
});