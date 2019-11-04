"use strict";
module.exports = (sequelize, DataTypes) => {
  const Pattren = sequelize.define(
    "Pattren",
    {
      name: DataTypes.STRING(150),
      status: { type: DataTypes.INTEGER(1), defaultValue: 1 }
    },
    {}
  );
  Pattren.associate = function(models) {
    // associations can be defined here
    Pattren.belongsTo(models.Election, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
    Pattren.belongsTo(models.Subconstituency, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Pattren;
};
