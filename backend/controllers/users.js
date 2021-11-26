const express = require("express");
const db = require("../sequelize");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { TOKEN_KEY, TOKEN_DURATION } = require("../tools/Tools");

exports.signup = async (req, res, next) => {
  try {
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const birthday = req.body.birthday;

    if (!name || !surname || !email || !password || !phone || !birthday) {
      return res.send({
        success: false,
        message: "NULL_PARAMETER",
      });
    }

    const user = await db.users.findOne({ where: { email } });

    console.log(user);

    if (user) {
      return res.send({
        success: false,
        message: "EMAIL_ALREADY_EXISTS",
      });
    }

    const result = await db.users.create({
      name,
      surname,
      email,
      password,
      phone,
      birthday: Date.parse(birthday),
    });

    return res.send({
      success: true,
      message: "USER_CREATED",
    });
  } catch (error) {
    return res.send({
      success: false,
      message: "INTERNAL_ERROR",
    });
  }
};

exports.signin = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      return res.send({
        success: false,
        message: "NULL_PARAMETER",
      });
    }

    // Vérifier le mot de passe aussi
    const user = await db.users.findOne({ where: { email, password } });

    if (!user) {
      return res.send({
        success: false,
        message: "INCORRECT_CREDENTIALS",
      });
    }

    // Générer une clé JWT
    let token = jwt.sign({ userId: user.idUser }, TOKEN_KEY, {
      expiresIn: TOKEN_DURATION,
    });

    return res.send({
      success: true,
      message: "USER_SIGNED",
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "INTERNAL_ERROR",
    });
  }
};

router.get("/askrecover", (req, res, next) => {
  res.send("askrecover");
});

router.post("/recover", (req, res, next) => {
  res.send("recover");
});
