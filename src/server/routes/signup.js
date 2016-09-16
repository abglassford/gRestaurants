const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require('../db/knex');
const indexController = require('../controllers/index');

router.get('/', indexController.isAuthenticated, function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'gRestaurants';
  res.render('signup', renderObject);
});

router.post('/new', indexController.isAuthenticated, (req, res, next) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const password = bcrypt.hashSync(req.body.password, 5);
  knex('users').insert({
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password
  })
  .then(results => {
    res.redirect('/signup');
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: 'server error'
    });
  });
  console.log(req.body.first_name);
});
module.exports = router;
