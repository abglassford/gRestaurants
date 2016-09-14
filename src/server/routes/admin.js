const express = require('express');
const router = express.Router();

router.get('/admin', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Admin';
  res.render('admin', renderObject);
});

module.exports = router;
