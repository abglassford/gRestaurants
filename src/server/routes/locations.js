const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const indexController = require('../controllers/index');

router.get('/', indexController.isAuthenticated, function (req, res, next) {
  const renderObject = req.renderObject;
  renderObject.title = 'Locations';
  knex('restaurants')
  .then(restaurants => {
    renderObject.restaurants = restaurants;
    res.render('locations', renderObject);
  });
});
//
module.exports = router;
