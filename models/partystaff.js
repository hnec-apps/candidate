"use strict";
module.exports = (sequelize, DataTypes) => {
  const SartyStaff = sequelize.define(
    "SartyStaff",
    {
      name: DataTypes.STRING(150),
      nid: DataTypes.STRING(150),
      f_name: DataTypes.STRING(150),
      p_name: DataTypes.STRING(150),
      g_name: DataTypes.STRING(150),
      l_name: DataTypes.STRING(150),
      phone: DataTypes.STRING(20),
      email: DataTypes.STRING(150),
      type: DataTypes.STRING(20),
      IdentityNumber: DataTypes.STRING(150),
      status: { type: DataTypes.INTEGER(1), defaultValue: 1 }
    },
    {}
  );
  SartyStaff.associate = function(models) {
    // associations can be defined here
    SartyStaff.belongsTo(models.Election, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return SartyStaff;
};
