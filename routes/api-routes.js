const router = require('express').Router();
const db = require('../models');


//router.get('/', (req, res) => res.json('Sample API get endpoint'));
router.get('/characters', function(req, res) {
   // console.log(Characters.findAll());
   db.Characters.findAll().then(function(result) {
       console.log(res.json(result));
    return res.json(result);
  });
});
module.exports = router;
