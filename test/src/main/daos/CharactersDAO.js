
const Sequelize = require('sequelize');
var sequelize11 = require('../config.js');

const Characters = require('../models/characters')(sequelize11, Sequelize); 

module.exports = {
    getCharacters: function() {
        return new Promise((resolve, reject) => {
            Characters.findAll().then(characters => {

                console.log('Characters are '+JSON.stringify(characters));
                resolve(characters);
            }).catch(err => {
                console.log('error occurred', err);
                reject(err);
            });
        });
    }
};