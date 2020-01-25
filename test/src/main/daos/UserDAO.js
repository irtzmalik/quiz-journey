
const Sequelize = require('sequelize');
var sequelize1 = require('../config.js');

const User = require('../models/users')(sequelize1, Sequelize); 
// User.find
// module.exports = {
//     getOneUser: function() {
//         return new Promise((resolve, reject) => {
//             User.findOne().then(user => {

//                 console.log('user name is '+JSON.stringify(user));
//                 resolve(user);
//             }).catch(err => {
//                 console.log('error occurred', err);
//                 reject(err);
//             });
//         });
//     }
// };


// module.exports = {
//     getUserbyId: function(id) {
//         return new Promise((resolve, reject) => {
//             User.findOne().then(user => {
                
//                 console.log('user object is '+JSON.stringify(user));
//                 if(id===user.id)
//                 {
//                 resolve(user);
//                 }
            
//             }).catch(err => {
//                 console.log('error occurred', err);
//                 reject(err);
//             });
//         });
//     }
// };
