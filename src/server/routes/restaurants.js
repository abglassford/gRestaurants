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

function mapShow (name) {
  const restNameURI = encodeURI(name);
  return `https://www.google.com/maps/embed/v1/search?key=AIzaSyD3nHjd0_RGDNdjaWEqsfJpcNn7WD3osic&q=${restNameURI}`;
}

router.get('/new', (req, res, next) => {
  const renderObject = req.renderObject;
  res.render('new_restaurant', renderObject);
});

router.get('/:id', indexController.isAuthenticated, function (req, res, next) {
  const renderObject = req.renderObject;
  const restaurantId = req.params.id;
  const promiseArray = [];

  let restaurantPromise = knex('restaurants')
  .where('id', restaurantId)
  .then((restaurant) => {
    renderObject.title = 'gRestaurants';
    renderObject.restaurants = restaurant;
    renderObject.restaurants[0].map = mapShow(restaurant[0].restaurant_name);
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
    return knex('reviews').del().where('restaurant_id', id)
  .then(() => {
      return knex('employees').del().where('restaurant_id', id);
    })
    .then(() => {
      return knex('restaurants').del().where('id', id);
    })
    .then(() => {
        res.status(200).json({
          status: 'success',
          message: `Restaurant is gone!`
        });
      })
    .catch((err) => {
      return next(err);
    });
  });

router.post('/employees/new/:id', indexController.isAuthenticated, (req, res, next) => {
    // grab the values to add to the db via req.body
    const id = parseInt(req.params.id); //id is restaurant_id
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const position = req.body.position;
    // add values to database
    knex('employees').insert({
      restaurant_id: id,
      first_name: first_name,
      last_name: last_name,
      position: position
    })
    .then((results) => {
      // redirect user
      res.redirect(`/restaurants/${id}`);
    })
    .catch((err) => {
      return next(err);
    });
  });
//
module.exports = router;
