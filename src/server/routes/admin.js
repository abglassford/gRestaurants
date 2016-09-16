const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

router.get('/', indexController.isAuthenticated, function (req, res, next) {
  const renderObject = req.renderObject;
  renderObject.title = 'Admin';
  res.render('admin', renderObject);
});

module.exports = router;
