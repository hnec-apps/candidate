"use strict";
module.exports = (sequelize, DataTypes) => {
  const Election = sequelize.define(
    "Election",
    {
      name: DataTypes.STRING(150),
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      status: { type: DataTypes.INTEGER(1), defaultValue: 0 }
    },
    {}
  );
  Election.associate = function(models) {
    // associations can be defined here
  };
  return Election;
};
