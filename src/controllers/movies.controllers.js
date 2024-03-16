const Movies = require("../models/movies");

const obtenerPeliculas = async (req, res) => {
  try {
    const peliculas = await Movies.find();

    return res.json({
      ok: true,
      msg: "Peliculas obtenidas",
      data: peliculas,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Servidor fuera de servicio",
      data: [],
    });
  }
};

module.exports = {
  obtenerPeliculas,
};
