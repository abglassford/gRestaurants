const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Log In';
  res.render('login', renderObject);
});

module.exports = router;
