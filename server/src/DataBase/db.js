const mysql = require("mysql2");
const { color } = require("colors");
const logger = require("../debug/logger");

//CONEXION
const conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

conexion.connect((err) => {
  if (err) {
    logger.error("Error en la conexion - MYSQL".red, err);
  } else {
    console.log("Conectado - MYSQL".blue);
  }
});

module.exports = conexion;
