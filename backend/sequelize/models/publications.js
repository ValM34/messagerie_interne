const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "publications",
    {
      idPublication: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      idOwner: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      publication: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      likes: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
