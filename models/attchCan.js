"use strict";
module.exports = (sequelize, DataTypes) => {
  const AttachCan = sequelize.define(
    "AttachCan",
    {
      path: DataTypes.STRING(150),
      status: { type: DataTypes.INTEGER(1), defaultValue: 1 }
    },
    {}
  );
  AttachCan.associate = function(models) {
    // associations can be defined here
    AttachCan.belongsTo(models.Election, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
    AttachCan.belongsTo(models.Attachment, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
    AttachCan.belongsTo(models.Candidate, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return AttachCan;
};
