
const Sequelize = require('sequelize');
var sequelize11 = require('../config.js');

const Location = require('../models/location')(sequelize11, Sequelize); 

module.exports = {
    getOneLocation: function() {
        return new Promise((resolve, reject) => {
            Location.findOne().then(location => {

                console.log('Location name is '+JSON.stringify(location));
                resolve(location);
            }).catch(err => {
                console.log('error occurred', err);
                reject(err);
            });
        });
    }
};