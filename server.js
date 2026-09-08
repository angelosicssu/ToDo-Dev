const http = require("http");

const server = http.createServer((request, response) => {
    if(request.url === "/") {
        response.end("Bem-vindo ao DevTask!");
    }
    if(request.url === "/tasks") {
        response.end("Lista de Tarefas");
    }
    if(request.url === "/projects") {
        response.end("Lista de Projetos");
    }
});

server.listen(3000, () => {
    console.log("Servidor rodando em ...");
});