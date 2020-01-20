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
    new Promise(function(resolve, reject) {
        resolve(controllers.getUserByToken(req.params.token));
    }).then(function(result) {
        res.json(result);
      });
  });

  router.get('/locations', function(req, res) {
    new Promise(function(resolve, reject) {
        resolve(controllers.getLocations());
    }).then(function(result) {
      res.json(result);
    });
});

router.get('/users/:id', function(req, res){
    new Promise(function(resolve, reject) {
        resolve(controllers.getUser(req.params.id));
    }).then(function(result) {
      res.json(result);
    });
});

router.get('/characters/:user_id', function(req, res){
    new Promise(function(resolve, reject) {
        resolve(controllers.getCharacters(req.params.user_id));
    }).then(function(result) {
      res.json(result);
    });
});

router.post('/users', (req, res) => {
    new Promise(function(resolve, reject) {
        console.log(req.body);
        resolve(controllers.createUser(req.body.name));
    }).then(function(result) {
        res.json(result);
    });
});

router.post('/characters', (req, res) => {
    new Promise(function(resolve, reject) {
        console.log(req.body);
        resolve(controllers.createCharacter(req.body.name, req.body.user_id));
    }).then(function(result) {
        res.json(result);
    });
});

module.exports = router;
