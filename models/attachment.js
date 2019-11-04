"use strict";
module.exports = (sequelize, DataTypes) => {
  const Attachment = sequelize.define(
    "Attachment",
    {
      name: DataTypes.STRING(150),
      isRequred: { type: DataTypes.INTEGER(1), defaultValue: 1 },
      status: { type: DataTypes.INTEGER(1), defaultValue: 1 }
    },
    {}
  );
  Attachment.associate = function(models) {
    // associations can be defined here
    Attachment.belongsTo(models.Election, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Attachment;
};
