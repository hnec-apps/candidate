"use strict";
module.exports = (sequelize, DataTypes) => {
  const Office = sequelize.define(
    "Office",
    {
      officeId: DataTypes.INTEGER(5),
      arabicName: DataTypes.STRING(150),
      englishName: DataTypes.STRING(150),
      status: { type: DataTypes.INTEGER(1), defaultValue: 1 }
    },
    {}
  );
  Office.associate = function(models) {
    // associations can be defined here
    Office.belongsTo(models.Election, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
    Office.belongsTo(models.Region, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Office;
};
