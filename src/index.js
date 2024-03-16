require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./database/mongodb");

dbConnection();

app.use(cors()); // para que cualquier host pueda conectar a mi api
app.use(express.json()); // para que mi api pueda leer informacion del body (POST y PUT)

app.get("/", (req, res) => {
  return res.json({
    ok: true,
    msg: "Bienvenido al MOVIES UC API",
  });
});

app.use("/movies", require("./routes/movies.routes"));

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
