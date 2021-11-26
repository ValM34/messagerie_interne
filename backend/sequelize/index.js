const { Sequelize } = require("sequelize");

// Sequelize : Objet pour créer une connexion au serveur MYSQL

// Créer une instance connexion au serveur MYSQL
const sequelize = new Sequelize("messagerie", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

const models = require("./models");

for (let model of models) {
  model(sequelize);
}

for (let key in sequelize.models) {
  let Model = sequelize.models[key];
  Model.sync();
}

module.exports = {
  sequelize,
  ...sequelize.models,
};
