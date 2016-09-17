const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const indexController = require('../controllers/index');

router.get('/:id/employees/new', indexController.isAuthenticated, (req, res, next) => {
  const renderObject = req.renderObject;
  renderObject.restaurant_id = req.params.id;
  renderObject.name = req.session.user.name;
  renderObject.user_id = Number(req.session.user.dataId);
  res.render('new_employee', renderObject);
});

router.post('/:id/employees/new', indexController.isAuthenticated, (req, res, next) => {

  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const position = req.body.position;
  const restaurant_id = req.params.id;
  const renderObject = req.renderObject;

  knex('employees')
  .insert({
    first_name: first_name,
    last_name: last_name,
    position: position,
    restaurant_id: restaurant_id
  })
  .then(value => {
    res.redirect(`/restaurants/${restaurant_id}`);
  })
  .catch(err => {
    return next(err);
  });
});

module.exports = router;
