const { Schema, model } = require("mongoose");

const MovieSchema = Schema({
  title: {
    type: String,
    require: [true, "El titulo es obligatorio"],
    unique: true,
  },
  overview: String,
  poster_path: String,
  release_date: String,
  popularity: String,
});

MovieSchema.methods.toJSON = function () {
  const { __v, _id, ...movie } = this.toObject();
  movie.id = _id;
  return movie;
};

module.exports = model("movie", MovieSchema, "movies");
