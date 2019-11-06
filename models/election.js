"use strict";
module.exports = (sequelize, DataTypes) => {
  const Election = sequelize.define(
    "Election",
    {
      name: DataTypes.STRING(150),
      type: DataTypes.STRING(50),
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      status: { type: DataTypes.INTEGER(1), defaultValue: 1 }
    },
    {}
  );
  Election.associate = function(models) {
    // associations can be defined here
  };
  return Election;
};
