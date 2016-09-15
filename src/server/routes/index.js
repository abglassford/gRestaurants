const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const indexController = require('../controllers/index');

router.get('/', (req, res, next) => {
  const renderObject = {};
  const featureArray = [];
  knex('restaurants')
  .then(data => {
    for (var i = 0; i < 3; i++) {
      featureArray.push(data[i]);
    }
    renderObject.data = featureArray;
    renderObject.title = 'gRestaurants';
    res.render('index', renderObject);
  }).catch(err => next(err));
});

module.exports = router;
