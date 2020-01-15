const controllers = require('../controllers/index');
const router = require('express').Router();

router.get('/', (req, res) => res.json('Sample API get endpoint'));

router.get('/questions/:category/:difficulty', (req, res) => {
    let data = controllers.getQuestions(req.params.category, req.params.difficulty);
    res.json(data);
});

module.exports = router;
