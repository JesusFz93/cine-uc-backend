const { Router } = require("express");
const {
  obtenerPeliculas,
  obtenerPelicula,
} = require("../controllers/movies.controllers");

const router = Router();

router.get("/", obtenerPeliculas);
router.get("/:id", obtenerPelicula);

module.exports = router;
