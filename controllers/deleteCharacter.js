module.exports = function deleteCharacter(char_id) {
  const db = require('../models/index');
  return db.Characters.destroy({
    where: {
      id: char_id
    }
  });
};