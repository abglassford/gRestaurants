const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const validation = require('./validation');
const indexController = require('../controllers/index');

router.get('/', indexController.isAuthenticated, function (req, res, next) {
  const renderObject = {};
  knex('restaurants')
  .then(data => {
    let renderData = data.slice(0, 9);
    renderData.forEach(object => {
      object.stringified = JSON.stringify(object);
    });
    renderObject.data = renderData;
    renderObject.title = 'gRestaurants';
    renderObject.session = req.session.user || null;
    res.render('restaurants', renderObject);
  }).catch(err => {
    return next(err);
  });
});

router.get('/new', (req, res, next) => {
  const renderObject = {};
  res.render('new_restaurant', renderObject);
});

router.get('/:id', indexController.isAuthenticated, function (req, res, next) {
  const renderObject = {};
  const restaurantId = req.params.id;
  let restaurantPromise =
  knex('restaurants')
  .where('id', restaurantId)
  .then((restaurant) => {
    renderObject.title = restaurant[0].restaurant_name;
    renderObject.restaurants = restaurant;
  });

  let reviewsPromise = knex('reviews')
  .where('restaurant_id', restaurantId)
  .innerJoin('users', 'reviews.user_id', 'users.id')
  .then((reviews) => {
    renderObject.reviews = reviews;
  });

  Promise.all([restaurantPromise, reviewsPromise])
  .then((resolvedPromises) => {
    res.render('restaurant', renderObject);
  })
  .catch(err => {
    return next(err);
  });
});

//Ryan Pando routes

//Alex Nye Routes
router.get('/update/:id', indexController.isAuthenticated, function (req, res, next) {
  const renderObject = {};
  const restaurantId = req.params.id;
  console.log(restaurantId);
  renderObject.title = 'Restaurants';
  knex('restaurants')
  .where('id', restaurantId)
  .then((data) => {
    console.log(data);
    renderObject.data = data;
    res.render('edit_restaurant', renderObject);
  })
  .catch(err => {
    return next(err);
  });
});

router.put('/updateSubmit/:id', indexController.isAuthenticated, (req, res, next) => {
  const id = parseInt(req.params.id);
  const restaurant_name = req.body.restaurant_name;
  const city = req.body.city;
  const state = req.body.state;
  const style = req.body.style;
  const images = req.body.images;
  const description = req.body.description;
  const zip = req.body.zip;
  const street = req.body.street;
  knex('restaurants')
  .update({
    restaurant_name: restaurant_name,
    city: city,
    state: state,
    style: style,
    images: images,
    description: description,
    zip: zip,
    street: street
  })
  .where('id', id)
  .returning('*')
  .then((results) => {
    if (results.length) {
      res.status(200).json({
        status: 'success',
        message: `${results[0].name} has been updated!`
      });
    } else {
      res.status(404).json({
        status: 'errror',
        message: 'That id does not exist'
      });
    }
  })
  .catch((err) => {
    res.status(500).json({
      status: 'errror',
      message: 'Something bad happened!'
    });
  });
});

router.post('/new', validation.verify, indexController.isAuthenticated, (req, res, next) => {
  // grab the values to add to the db via req.body
  const restaurant_name = req.body.name;
  const city = req.body.city;
  const state = req.body.state;
  const style = req.body.style;
  const images = req.body.images;
  const description = req.body.description;
  const zip = req.body.zip;
  const street = req.body.street;
  // add values to database
  knex('restaurants').insert({
    restaurant_name: restaurant_name,
    city: city,
    state: state,
    style: style,
    images: images,
    description: description,
    zip: zip,
    street: street
  })
  .then((results) => {
    // redirect user
    res.redirect('/');
  })
  .catch((err) => {
    return next(err);
  });
});

//
module.exports = router;
