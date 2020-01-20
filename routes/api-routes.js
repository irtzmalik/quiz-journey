const controllers = require('../controllers/index');
const router = require('express').Router();
const db = require("../models");

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

  router.get('/location/', function(req, res) {
    db.Locations.findAll({})
    .then(function(result) {
      res.json(result);
    });
});

router.get('/characters/:id', function(req, res){
    db.Characters.findAll({
        where: {
          user_id: req.params.id
        }
    })
    .then(function(result) {
      res.json(result);
    });
});

router.post('/users', (req,res) => {
    new Promise(function(resolve, reject) {
        console.log(req.body);
        resolve(controllers.createUser(req.body.name));
    }).then(function(result) {
        res.json(result);
    });
});

module.exports = router;
