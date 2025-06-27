import mongoose from "mongoose";

// 1- Configuro la URI o dirección de la base de datos

// 2- Conecto la base de datos
mongoose.connect("mongodb+srv://Imanol:4l3554ndr0@imanolscluster.7jrwi.mongodb.net/");

// ------ Comprobar que todo funciona ------

// 3- Creo una constante que es igual a la conexión
const connection = mongoose.connection;

// Veo si funciona
connection.once("open", () => {
  console.log("DB is connected");
});

// Veo si se desconectó
connection.on("disconnected", () => {
  console.log("DB is disconnected");
});

// Veo si hay un error
connection.on("error", (error) => {
  console.log("error found" + error);
});