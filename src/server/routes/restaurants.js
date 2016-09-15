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
    return next(err);
  });
});

router.get('/new', (req, res, next) => {
  const renderObject = {};
  res.render('new_restaurant', renderObject);
});

router.get('/:id', function (req, res, next) {
  const renderObject = {};
  const restaurantId = req.params.id;
  renderObject.title = 'Restaurants';

  let restaurantPromise =
  knex('restaurants')
  .where('id', restaurantId)
  .then((restaurant) => {
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
    console.log(err);
  });
});

//Ryan Pando routes

//

//Alex Nye Routes

router.post('/new', (req, res, next) => {
  // grab the values to add to the db via req.body
  const restaurant_name = req.body.name;
  const city = req.body.city;
  const state = req.body.state;
  const style = req.body.cuisine;
  const rating = req.body.rating;
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
