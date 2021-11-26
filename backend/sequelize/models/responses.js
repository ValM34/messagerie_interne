const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "responses",
    {
      idResponse: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      idOwner: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      idPublication: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      idComment: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      response: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
