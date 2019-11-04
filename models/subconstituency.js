"use strict";
module.exports = (sequelize, DataTypes) => {
  const Subconstituency = sequelize.define(
    "Subconstituency",
    {
      subConstituencyId: DataTypes.INTEGER(2),
      arabicName: DataTypes.STRING(150),
      englishName: DataTypes.STRING(150),
      status: { type: DataTypes.INTEGER(1), defaultValue: 1 }
    },
    {}
  );
  Subconstituency.associate = function(models) {
    // associations can be defined here
    Subconstituency.belongsTo(models.Election, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
    Subconstituency.belongsTo(models.Region, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
    Subconstituency.belongsTo(models.Office, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
    Subconstituency.belongsTo(models.Constituency, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Subconstituency;
};
