const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const validation = require('./validation');
const indexController = require('../controllers/index');

router.get('/', indexController.isAuthenticated, function (req, res, next) {
  const renderObject = req.renderObject;
  knex('restaurants')
  .then(data => {
      data.forEach(object => {
        object.stringified = JSON.stringify(object);
      });
      renderObject.data = data;
      renderObject.title = 'gRestaurants';
      renderObject.session = req.session.user || null;
      res.render('restaurants', renderObject);
    }).catch(err => {
      return next(err);
    });
  });

router.get('/new', (req, res, next) => {
  const renderObject = req.renderObject;
  res.render('new_restaurant', renderObject);
});

router.get('/:id', indexController.isAuthenticated, function (req, res, next) {
  const renderObject = req.renderObject;
  const restaurantId = req.params.id;
  const promiseArray = [];

  let restaurantPromise =
  knex('restaurants')
  .where('id', restaurantId)
  .then((restaurant) => {
    renderObject.title = 'gRestaurants';
    renderObject.restaurants = restaurant;
  });
  promiseArray.push(restaurantPromise);

  let reviewsPromise = knex('reviews')
  .where('restaurant_id', restaurantId)
  .innerJoin('users', 'reviews.user_id', 'users.id')
  .then((reviews) => {
    renderObject.reviews = reviews;
  });
  promiseArray.push(reviewsPromise);
  if (req.renderObject.admin === true) {
    let employeesPromise = knex('employees')
    .where('restaurant_id', restaurantId)
    .then((employees) => {
      renderObject.employees = employees;
    })
    .catch(err => {
      return next(err);
    });
    promiseArray.push(employeesPromise);
  }

  Promise.all(promiseArray)
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
  const renderObject = req.renderObject;
  const restaurantId = req.params.id;
  renderObject.title = 'Restaurants';
  knex('restaurants')
  .where('id', restaurantId)
  .then((data) => {
    renderObject.data = data;
    res.render('edit_restaurant', renderObject);
  })
  .catch(err => {
    return next(err);
  });
});

router.put('/updateSubmit/:id', validation.verify, indexController.isAuthenticated, (req, res, next) => {
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
    return next();
  });
});

router.post('/new', validation.verify, indexController.isAuthenticated, (req, res, next) => {
  // grab the values to add to the db via req.body
  const restaurant_name = req.body.restaurant_name;
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
    res.redirect('/restaurants');
  })
  .catch((err) => {
    return next(err);
  });
});

router.delete('/delete/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  knex('restaurants')
  .del()
  .where('id', id)
  .returning('*')
  .then((results) => {
    if (results.length) {
      res.status(200).json({
        status: 'success',
        message: `Restaurant is gone!`
      });
    } else {
      res.status(404).json({
        status: 'errror',
        message: 'That restaurant id does not exist'
      });
    }
  })
  .catch((err) => {
    return next(err);
  });
});

//
module.exports = router;
