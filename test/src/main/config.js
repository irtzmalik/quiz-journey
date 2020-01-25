
const Sequelize = require('sequelize');

const sequelize = new Sequelize('dbname', 'dbuser', 'dbpassword', {
    host: 'mydb.host.com',
    dialect: 'mysql',
    operatorsAliases: false,
    dialectOptions: {
        dateStrings: true,
        typeCast: function (field, next) { 
            if (field.type === 'DATETIME') {
                return field.string()
            }
            return next()
        },
    },
    timezone: "Canada/Toronto"
});

module.exports = sequelize;