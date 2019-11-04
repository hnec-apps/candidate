"use strict";
module.exports = (sequelize, DataTypes) => {
  const Constituency = sequelize.define(
    "Constituency",
    {
      constituencyId: DataTypes.INTEGER(2),
      arabicName: DataTypes.STRING(150),
      englishName: DataTypes.STRING(150),
      status: { type: DataTypes.INTEGER(1), defaultValue: 1 }
    },
    {}
  );
  Constituency.associate = function(models) {
    // associations can be defined here
    Constituency.belongsTo(models.Election, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
    Constituency.belongsTo(models.Region, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
    Constituency.belongsTo(models.Office, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Constituency;
};
