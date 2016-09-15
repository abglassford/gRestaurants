const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  const renderObject = {};
  knex('restaurants')
  .then(data => {
    let renderData = data.slice(0, 9);
    renderData.forEach(object => {
      object.stringified = JSON.stringify(object);
    });
    renderObject.data = renderData;
    renderObject.title = 'Restaurants';
    res.render('restaurants', renderObject);
  }).catch(err => {
    next(err);
  });
});

router.get('/:id', function (req, res, next) {
  const renderObject = {};
  const restaurantId = req.params.id;
  renderObject.title = 'Restaurants';
  knex('restaurants')
  .where('id', restaurantId)
  .then((data) => {
    renderObject.data = data;
    res.render('restaurant', renderObject);
  })
  .catch(err => {
    next(err);
  });
});

//Ryan Pando routes

//

//Alex Nye Routes

//
module.exports = router;
