const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
<<<<<<< HEAD

router.get('/', (req, res, next) => {
=======
const indexController = require('../controllers/index');

router.get('/', indexController.isAuthenticated, (req, res, next) => {
>>>>>>> 2bc44162ea9ec1ee077a07a02dd64c2a028cc547
  const renderObject = {};
  const featureArray = [];
  knex('restaurants')
  .then(data => {
    for (var i = 0; i < 3; i++) {
      featureArray.push(data[getRandomInteger(data.length)]);
    }
    renderObject.data = featureArray;
    renderObject.title = 'gRestaurants';
    renderObject.sessionName = req.session.user || null;
    res.render('index', renderObject);
  }).catch(err => next(err));
});

function getRandomInteger(max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * max);
}

module.exports = router;
