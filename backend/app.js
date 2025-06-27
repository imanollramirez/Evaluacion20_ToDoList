import express from "express";
import tasksRoute from "./src/routes/tasks.js";

import swagger from "swagger-ui-express";
import fs from "fs";
import path from "path";

const swaggerDocument = JSON.parse(
     fs.readFileSync(path.resolve("./documentation.json")
     ,
     "utf-8")
    );

// Creo una constante que es igual a la libreria que importé
const app = express();

//Que acepte datos en json
app.use(express.json());

app.use("/api/tasks", tasksRoute);

//Documentación
app.use("/api/doc", swagger.serve, swagger.setup(swaggerDocument));

export default app;