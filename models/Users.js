module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    UserId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userName: DataTypes.STRING,
    passCodeLink: DataTypes.STRING,
    UserCharacterID: DataTypes.INTEGER,
  });
  return Users;
};
