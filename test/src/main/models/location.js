module.exports = function(sequelize, DataTypes) {
    return sequelize.define('location', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field : 'id'
      },
      name: 
      {
        type: DataTypes.STRING(255),
        field:'name'
      },

      image: 
      {
        type: DataTypes.STRING(255),
        field:'image'
      },
      category: 
      {
          
        type: DataTypes.INTEGER

      }
    
    }, {
      tableName: 'Locations',
      timestamps: true,
    
    });
  };
  