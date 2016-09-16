const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Admin';
  res.render('admin', renderObject);
});

module.exports = router;
