module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define(
    "Region",
    {
      regionId: DataTypes.INTEGER(2),
      arabicName: DataTypes.STRING(150),
      englishName: DataTypes.STRING(150),
      status: { type: DataTypes.INTEGER(1), defaultValue: 1 }
    },
    {}
  );
  Region.associate = function(models) {
    // associations can be defined here
    Region.belongsTo(models.Election, {
      onDelete: "restrict",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Region;
};
