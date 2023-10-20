const conexion = require("../DataBase/db");
const queries = require("../DataBase/query");
const { addHash } = require("./hashing");
const { generateToken } = require("../auth/authToken");
const logger = require("../debug/logger");
exports.register = async (req, res) => {
  const { body } = req;

  if (!body.user || !body.email || !body.password) {
    logger.warn("Uno de los campos estas vacio");
    return res.status(400).json({
      status: "FAILED",
      data: { error: "Uno de los campos estas vacio" },
    });
  }
  const userData = await addHash(body);

  try {
    queries.createUser(userData);
    res
      .status(200)
      .send({ status: "OK", message: "Se ha registrado correctamente" });
  } catch (error) {
    res
      .status(300)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

exports.login = async (req, res) => {
  try {
    const { body } = req;

    if (!body.email || !body.password) {
      logger.warn("Uno de los campos estas vacio");
      return res.status(400).json({
        status: "FAILED",
        data: { error: "Uno de los campos estas vacio" },
      });
    }

    const result = await queries.validateUser(body);

    const id = await result.id;

    const token = await generateToken(id);

    const cookiesOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    res.cookie("jwt", token, cookiesOptions);

    res.status(200).send({ status: "OK", data: "Inicio de sesion exitoso" });
  } catch (error) {
    res
      .status(error.statusCode)
      .send({ status: error.code, data: error.message });
  }
};
exports.isAuthenticated = async (req, res) => {
  try {
    const token = await req.cookies.jwt;

    const user = await queries.authenticated(token);

    res.send({
      status: "OK",
      data: {
        user: user.user,
        nivel: user.nivel,
        lecciones: user.lecciones,
        modoJuego: user.modoJuego,
        numeroProgreso: user.numeroProgreso,
        coloresProgreso: user.colorProgreso,
        familiaProgreso: user.familiaProgreso,
        diasMesesProgreso: user.diasMesesProgreso,
        preguntasProgreso: user.PreguntasBasicasProgreso,
      },
    });
  } catch (error) {
    logger.error(error);

    logger.warn("Token no valido");

    res.status(400).send({ status: "Failed", data: error });
  }
};

exports.progreso = async (req, res) => {
  const { body } = req;

  if (!body.niveles || !body.lecciones || !body.modoJuego) {
    logger.warn("[PROGRESO] - Uno de los campos estas vacio en ");
    return res.status(400).json({
      status: "FAILED",
      data: { error: "Uno de los campos estas vacio" },
    });
  }
  const token = await req.cookies.jwt;
  const user = await queries.authenticated(token);

  const level = JSON.stringify(body.niveles);
  const lesson = JSON.stringify(body.lecciones);
  const modeGame = JSON.stringify(body.modoJuego);

  conexion.query(
    "UPDATE niveles SET nivel = ?,lecciones = ?,modoJuego = ?  WHERE id_usersfk = ?",
    [level, lesson, modeGame, user.id_users],
    (err) => {
      if (err) {
        logger.error("Error al actualizar el progreso");

        res.status(500).json({ mensaje: "Error al actualizar el progreso" });
        return;
      }
      logger.info("Progreso Actualizado Correctamente");
      res.status(200).json({ mensaje: "Progreso actualizado correctamente" });
    }
  );
};

exports.logout = (req, res) => {
  logger.info("Cerrando sesion");
  res.clearCookie("jwt");
  res.status(200).json({ mensaje: "Sesion cerrada correctamente" });
};
