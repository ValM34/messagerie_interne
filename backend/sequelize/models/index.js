const usersModel = require("./users");
const publicationsModel = require("./publications");
const messagesModel = require("./messages");
const commentsModel = require("./comments");
const responsesModel = require("./responses");

module.exports = [
  usersModel,
  publicationsModel,
  messagesModel,
  commentsModel,
  responsesModel,
];
