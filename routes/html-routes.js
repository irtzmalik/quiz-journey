const router = require('express').Router();
const exphbs = require("express-handlebars");

router.get('/', (req, res) => {
  res.render("index");
});


router.get('/:token', (req, res) => {
  if (req.params.token === "43n895n4y39432") {
    let account = {
      id: 1,
      name: "Winson",
      token: "43n895n4y39432"
    };
    res.render("game", account);
  } else {
    res.redirect('/');
  }
});

// Place this route below all others to send he index.html file
// to any request that is not explicitly defined above
/*
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
*/

module.exports = router;
