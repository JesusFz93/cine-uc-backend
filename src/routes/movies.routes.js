const { Router } = require("express");
const { obtenerPeliculas } = require("../controllers/movies.controllers");

const router = Router();

router.get("/", obtenerPeliculas);

module.exports = router;
