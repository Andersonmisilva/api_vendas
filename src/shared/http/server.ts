import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3333;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
