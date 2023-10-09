const conexion = require("../DataBase/db");
const queries = require("../DataBase/query");
const { addHash } = require("./hashing");
const { generateToken } = require("../auth/authToken");
exports.register = async (req, res) => {
  const { body } = req;

  if (!body.user || !body.email || !body.password) {
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
    console.log(body);

    if (!body.email || !body.password) {
      return res.status(400).json({
        status: "FAILED",
        data: { error: "Uno de los campos estas vacio" },
      });
    }

    const result = await queries.validateUser(body);

    console.log(result);

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
    console.log(token);

    const user = await queries.authenticated(token);

    res.send({
      status: "OK",
      data: {
        user: user.user,
        nivel: user.nivel,
        numeroProgreso: user.numeroProgreso,
        coloresProgreso: user.colorProgreso,
        familiaProgreso: user.familiaProgreso,
        diasMesesProgreso: user.diasMesesProgreso,
        preguntasProgreso: user.PreguntasBasicasProgreso,
      },
    });
  } catch (error) {
    res.status(400).send({ status: "Failed", data: error });
  }
};

exports.progreso = async (req, res) => {
  const niveles = req.body;

  const token = await req.cookies.jwt;
  const user = await queries.authenticated(token);
  const stringLevel = JSON.stringify(niveles);

  conexion.query(
    "UPDATE niveles SET nivel = ? WHERE id_usersfk = ?",
    [stringLevel, user.id_users], // Ajustar el orden de los parámetros
    (err) => {
      if (err) {
        console.log("FALLO AL ENVIAR");
        console.error(err);
        res.status(500).json({ mensaje: "Error al actualizar el progreso" });
        return;
      }
      console.log("Envío exitoso");
      res.status(200).json({ mensaje: "Progreso actualizado correctamente" });
    }
  );
};

exports.logout = (req, res) => {
  res.clearCookie("jwt");
  return res.redirect("http://localhost:5173");
};
