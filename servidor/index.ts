import express, { Request, Response } from "express";
import auth from "./middleware/auth";
import cors from "cors";

import router from "./routes";

const app = express();

// Middlewares.
app.use(cors());
app.use(express.json());

// Aquí se pasan todas las rutas declaradas en routers.
app.use(router);

app.use("/historial-chat", auth);

const words = [
  "hola",
  "qwerty",
  "jugo",
  "de",
  "manzana",
  "agua",
  "wiiiii",
  "no",
  "mimir",
  "a",
  "123",
  "nomnom",
  "mami",
  "aaaa",
  "gringos",
];

// Retorna un mensaje aleatorio incluyendo tantas palabras como
// se hayan especificado en el input.
const getRandomMessage = (size: number) => {
  let output = "";
  for (let i = 0; i < size; i++) {
    const n = Math.floor(Math.random() * words.length);
    output = output + words[n] + " ";
  }
  return output;
};

// Duevuelve un mensaje aleatorio al usuario
app.post("/historial-chat", (_req, res: Response) => {
  const randomMessage = getRandomMessage(3);
  const messageRandom = randomMessage;
  res.status(200).json({ data: messageRandom });
});

// Este endpoint es para saber si el servidor está corriendo.
app.get("/healthcheck", (_, res: Response) => {
  res.status(200).json({ msg: "estoy funcionando" });
});

// El servidor se inicia en el puerto 3000, y luego muestra un mensaje por la consola.
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
