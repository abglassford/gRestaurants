const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Restaurants';
  res.render('restaurants', renderObject);
});

module.exports = router;
