const mongoose = require("mongoose");

const dbConnection = () => {
  try {
    mongoose.connect(process.env.MONGODB_CN, {});
    console.log("Base de datos online");
  } catch (error) {
    throw new Error("Error al iniciar la base de datos");
  }
};

module.exports = dbConnection;
