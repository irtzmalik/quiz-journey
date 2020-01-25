module.exports = function(sequelize, DataTypes) {
    return sequelize.define('characters', {
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

    
      points: 
      {
          
        type: DataTypes.INTEGER,
        defaultValue: 0,
        field: 'points'

      },

      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          field :'user id'
        }
    
    }, 
      tableName: 'Characters',
      timestamps: true,
    
    });
  };
  