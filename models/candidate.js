"use strict";
module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define(
    "Candidate",
    {
      nid: DataTypes.STRING(150),
      cra: DataTypes.STRING(150),
      f_name: DataTypes.STRING(150),
      p_name: DataTypes.STRING(150),
      g_name: DataTypes.STRING(150),
      l_name: DataTypes.STRING(150),
      gender: DataTypes.INTEGER(1),
      birth_day: DataTypes.DATE,
      mother_name: DataTypes.STRING(150),
      phone: DataTypes.STRING(20),
      work_phone: DataTypes.STRING(20),
      email: DataTypes.STRING(150),
      qualification: DataTypes.STRING(150),
      specialty: DataTypes.STRING(150),
      account_number: DataTypes.STRING(150),
      // office: { type: Schema.Types.ObjectId, ref: "Office" },
      // subconstituency: { type: Schema.Types.ObjectId, ref: "Subconstituency" },
      // center: { type: Schema.Types.ObjectId, ref: "Center" },
      // attachment: [{ type: Schema.Types.ObjectId, ref: "Attachment" }],
      // competition: { type: Schema.Types.ObjectId, ref: "Competition" },
      status: { type: DataTypes.INTEGER(1), defaultValue: 1 }
    },
    {}
  );
  Candidate.associate = function(models) {
    // associations can be defined here
    Candidate.belongsTo(models.Election, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Candidate;
};
