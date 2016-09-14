const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  const renderObject = {};
  knex('restaurants')
  .then(data => {
    let renderData = data.slice(0, 9)
    renderData.forEach(object => {
      object.stringified = JSON.stringify(object);
    });
    renderObject.data = renderData;
    renderObject.title = 'Restaurants';
    res.render('restaurants', renderObject);
  });
});

router.get('/:id', function (req, res, next) {
  const id = req.params.id
  const renderObject = {};
    renderObject.title = 'Restaurants';
    res.json(renderObject)
  });

module.exports = router;
