var db = require('../models');

var getUser = {
    findByName: function(name) {
        return db.User.findOne({
            where: {
                name: name
            }
          //  console.log("user");
        })
    }
}

module.exports = getUser;
