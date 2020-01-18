const controllers = require('../controllers/index');
const router = require('express').Router();
const db = require("../models");

router.get('/', (req, res) => res.json('Sample API get endpoint'));

router.get('/questions/:category/:difficulty', (req, res) => {
    new Promise(function(resolve, reject) {
        resolve(controllers.getQuestions(req.params.category, req.params.difficulty));
    }).then(function(result) {
        res.json(result);
    });
});

router.get('/token/:token', function(req, res) {
    db.Users.findOne({
      where: {
        token: req.params.token
      }
    })
      .then(function(result) {
        res.json(result);
      });
  });


module.exports = router;
