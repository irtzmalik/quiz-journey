const controllers = require('../controllers/index');
const router = require('express').Router();

router.get('/', (req, res) => res.json('Sample API get endpoint'));

router.get('/questions/:category/:difficulty', (req, res) => {
    new Promise(function(resolve, reject) {
        resolve(controllers.getQuestions(req.params.category, req.params.difficulty));
    }).then(function(result) {
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
