"use strict";
module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define(
    "Log",
    {
      opp: DataTypes.STRING(150),
      disc: DataTypes.STRING(150),
      name: DataTypes.STRING(150),
      table: DataTypes.STRING(150),
      value: DataTypes.STRING(150),
      status: { type: DataTypes.INTEGER(1), defaultValue: 1 }
    },
    {}
  );
  Log.associate = function(models) {
    // associations can be defined here
    Log.belongsTo(models.Election, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
    Log.belongsTo(models.User, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Log;
};
