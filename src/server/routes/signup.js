const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Sign Up';
  res.render('signup', renderObject);
});

router.get('/new', (req, res, next) => {
  res.render('signup')
})
module.exports = router;
