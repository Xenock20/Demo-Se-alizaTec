const conexion = require("./db");
const jwt = require("jsonwebtoken");
const bcrypts = require("bcrypt");
const createUser = (newUser) => {
  conexion.query(
    "SELECT * FROM USERS WHERE email = ?",
    [newUser.email],
    (err, userData) => {
      if (userData.length > 0) {
        return {
          status: 409,
          error: "El correo electrónico ya está registrado.",
        };
      } else {
        conexion.query("INSERT INTO users SET ?", newUser, (err, result) => {
          if (err) {
            return {
              status: 400,
              message: "Error al almacenar Usuario",
            };
          }

          userId = result.insertId;

          conexion.query(
            "INSERT INTO niveles (id_usersfk, nivel, numeroProgreso, coloresProgreso, familiaProgreso, diasMesesProgreso, PreguntasBasicasProgreso) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [userId, "[]", 0, 0, 0, 0, 0],
            (err, result) => {
              if (err) {
                return {
                  status: 400,
                  message: "Error al almacenar Usuario",
                };
              }
              console.log("Usuario creado exitosamente");
              return;
            }
          );
        });
      }
    }
  );
};

const validateUser = async (userData) => {
  try {
    return new Promise((resolve, reject) => {
      conexion.query(
        "SELECT * FROM users WHERE email = ?",
        [userData.email],
        async (err, result) => {
          if (err) {
            console.error(err);
            reject({
              statusCode: 500,
              code: "SERVER_ERROR",
              message: "Server error",
            });
            return;
          }
          if (
            result?.length === 0 ||
            !(await bcrypts.compare(userData.password, result.at(0).password))
          ) {
            console.log("Credenciales incorrectas");
            reject({
              statusCode: 400,
              code: "BAD_CREDENTIALS",
              message: "Credenciales incorrectas",
            });
            return;
          }

          resolve({ id: result[0].id_users });
        }
      );
    });
  } catch (error) {
    throw error;
  }
};

const authenticated = async (token) => {
  try {
    const authdata = await jwt.verify(token, process.env.JWT_SECRET);

    const user = new Promise((resolve, reject) => {
      conexion.query(
        "SELECT * FROM users JOIN niveles ON users.id_users = niveles.id_usersfk WHERE users.id_users = ?",
        [authdata.id],
        async (err, resultData) => {
          if (err) {
            console.error("Error en la consulta SQL:", err);
            reject({
              statusCode: 400,
              code: "Error_query",
              message: "Error query Select",
            });
          }

          const datos = await resultData[0];
          resolve(datos);
        }
      );
    });

    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  validateUser,
  authenticated,
};
