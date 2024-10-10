const express = require('express');

const app = express();

/*
* GET - Buscar uma informação dentro do servidor
* POST - Inserir uma informação no servidor
* PUT - Alterar uma informação no servidor
* PATCH - Alterar uma informação específica
* DELETE - Deletar uma inforemação no servidor
*/


app.get("/Prontuario", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/Prontuario", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/Prontuario/:id",(request, response) => {
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/Prontuario/:id",(request, response) => {
    return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/Prontuario/:id",(request, response) => {
    return response.json(["Curso 6", "Curso 7", "Curso 4"]);
});

app.listen(3000);