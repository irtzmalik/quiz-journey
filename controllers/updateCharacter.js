module.exports = function createCharacter(user_id, points) {
  const db = require('../models/index');
  return db.Characters.update({ points: points }, {
    where: {
      user_id: user_id
    }
  });
};