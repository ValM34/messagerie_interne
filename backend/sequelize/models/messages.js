const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "messages",
    {
      idMessage: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      idDst: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      idExp: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      message: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
