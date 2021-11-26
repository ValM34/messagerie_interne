const jwt = require("jsonwebtoken");
const { TOKEN_KEY } = require("../tools/Tools");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.token;

    if (!token) {
      throw Error("NOT AUTHORIZED");
    }

    const decodedToken = jwt.verify(token, TOKEN_KEY);
    const userId = decodedToken.userId;

    if (!userId) {
      throw "NOT AUTHORIZED";
    } else {
      req.userId = userId;
      next();
    }
  } catch (error) {
    res.send({
      success: false,
      message: "NOT AUTHORIZED",
    });
  }
};
