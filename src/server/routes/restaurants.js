const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  const renderObject = {};
  knex('restaurants')
  .then(data => {
    renderObject = {
      name: data.nam
    }
  });

  renderObject.title = 'Restaurants';
  res.render('restaurants', renderObject);
});

module.exports = router;
