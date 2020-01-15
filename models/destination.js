module.exports = (sequelize, DataTypes) => {
  const Destination = sequelize.define('Destination', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    category: DataTypes.INTEGER,
  });
  return Destination;
};
