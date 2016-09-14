const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Sign Up';
  res.render('signup', renderObject);
});

module.exports = router;
