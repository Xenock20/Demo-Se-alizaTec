const conexion = require("../DataBase/db");
const bcrypts = require("bcrypt");

exports.register = async (req, res) => {
  const body = req.body;
  const user = req.body.user;
  const email = req.body.email;
  const password = req.body.password;
  console.log(body);
  console.log(password);

  let passHash = await bcrypts.hash(password, 10);

  const userData = {
    user: user,
    email: email,
    password: passHash,
  };

  conexion.query(
    "SELECT * FROM USERS WHERE email = ?",
    [userData.email],
    (err, result) => {
      if (result.length > 0) {
        console.log("Email ya existe");
        return res
          .status(409)
          .json({ error: "El correo electrónico ya está registrado." });
      } else {
        conexion.query("INSERT INTO users SET ?", userData, (err, result) => {
          if (err) {
            console.log("El error es" + err);
          } else {
            return res.send("CORRECTO");
          }
        });
      }
    }
  );
};

exports.login = (req, res) => {
  const body = req.body;
  const password = req.body.password;
  const email = req.body.email;
  console.log(body);

  console.log(password);

  conexion.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ error: "Error en la consulta de la base de datos." });
      }

      if (
        result.length === 0 ||
        !(await bcrypts.compare(password, result[0].password))
      ) {
        console.log("Credenciales incorrectas");
        return res.status(401).json({ error: "Credenciales incorrectas." });
      } else {
        console.log("Inicio de sesión exitoso");
        res.status(200).json({ message: "Inicio de sesión exitoso." });
      }
    }
  );
};
